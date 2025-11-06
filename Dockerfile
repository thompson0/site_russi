# syntax=docker/dockerfile:1.7

############################
# Base
############################
FROM node:20-slim AS base
ENV NODE_ENV=production
WORKDIR /app

############################
# Deps (cache eficiente)
############################
FROM base AS deps
# Instala utilitários mínimos (openssl p/ libs nativas comuns)
RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl ca-certificates git \
  && rm -rf /var/lib/apt/lists/*

# Copia só o necessário para cachear a instalação
COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

############################
# Build
############################
FROM base AS build
ENV NEXT_TELEMETRY_DISABLED=1
# Caso use Prisma, gerar clients não exige DB_URL
RUN apt-get update && apt-get install -y --no-install-recommends \
    openssl ca-certificates \
  && rm -rf /var/lib/apt/lists/*

# Traz node_modules já resolvidos
COPY --from=deps /app/node_modules ./node_modules
# Copia o restante do projeto
COPY . .

# (Opcional) Prisma generate se existir schema
RUN if [ -f prisma/schema.prisma ]; then npx prisma generate; fi

# Requer no next.config.js: module.exports = { output: 'standalone' }
RUN npm run build

############################
# Runner (final)
############################
FROM node:20-slim AS runner
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
WORKDIR /app

# Usuário não-root
RUN groupadd -g 1001 nodejs && useradd -u 1001 -g nodejs -m nextjs

# Copia artefatos do build standalone
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./public/_next/static

# Se usar uploads/armazenamento local, garanta a pasta e permissão:
# RUN mkdir -p /app/storage && chown -R nextjs:nodejs /app/storage

USER nextjs
EXPOSE 3000

# Healthcheck simples (opcional)
# HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
#   CMD node -e "require('http').get('http://127.0.0.1:'+ (process.env.PORT||3000), r => { if(r.statusCode!==200) process.exit(1) }).on('error',()=>process.exit(1))"

CMD ["node", "server.js"]
