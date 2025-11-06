# syntax=docker/dockerfile:1.7

############################
# Base
############################
FROM node:20-alpine AS base
ENV NODE_ENV=production
WORKDIR /app

############################
# Dependências
############################
FROM base AS deps
# Copia apenas o necessário para cachear a instalação
COPY package.json package-lock.json* ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci

############################
# Build
############################
FROM base AS build
ENV NEXT_TELEMETRY_DISABLED=1
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Gera build standalone (Next 13+ até 15)
RUN npm run build

############################
# Runner (final)
############################
FROM node:20-alpine AS runner
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

WORKDIR /app

# Cria usuário não-root
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

# Copia artefatos do build standalone
COPY --from=build /app/public ./public
COPY --from=build /app/.next/standalone ./
COPY --from=build /app/.next/static ./public/_next/static

USER nextjs
EXPOSE 3000

# Inicia o servidor
CMD ["node", "server.js"]
