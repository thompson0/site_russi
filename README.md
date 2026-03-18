# site_russi

## Visao geral

Aplicacao Next.js com Prisma e PostgreSQL, usando Yarn 4. O build gera o Prisma Client e depois compila o Next.

## Requisitos

- Node.js 20 (recomendado)
- Yarn 4 (via Corepack)
- Docker 20+ (para build local ou deploy via container)
- PostgreSQL

## Variaveis de ambiente

Obrigatorias:

- DATABASE_URL
- DIRECT_URL
- SESSION_SECRET

Exemplo:

```
DATABASE_URL=postgres://user:pass@host:5432/db
DIRECT_URL=postgres://user:pass@host:5432/db
SESSION_SECRET=uma_chave_forte
```

## Como rodar local

1) Ative o Corepack e prepare o Yarn:

```
corepack enable
corepack prepare yarn@4.13.0 --activate
```

2) Instale dependencias:

```
yarn install
```

3) Gere o Prisma Client e suba o app:

```
yarn exec prisma generate
yarn dev
```

## Prisma (importante)

- `@prisma/client` fica em dependencies.
- `prisma` CLI fica em devDependencies.
- O build usa `yarn exec prisma generate`.

Se precisar atualizar o banco:

```
yarn exec prisma db push
```

## Build local com Docker

```
docker build -t russi-site .
docker run --rm -p 5000:5000 \
  -e DATABASE_URL=... \
  -e DIRECT_URL=... \
  -e SESSION_SECRET=... \
  russi-site
```

## Deploy com Coolify (recomendado)

1) Configure o repositorio no Coolify.
2) Adicione as variaveis de ambiente:
   - DATABASE_URL
   - DIRECT_URL
   - SESSION_SECRET
3) Use o Dockerfile do repo (build com Yarn 4).
4) Redeploy.

### Observacoes do Dockerfile

- Yarn 4 via Corepack.
- `YARN_NODE_LINKER=node-modules` para compatibilidade do Prisma.
- `yarn install --immutable` para build deterministico.
- `yarn exec prisma generate` antes do `yarn build`.

## Problemas comuns

### Prisma nao encontra @prisma/client no build

Confirme:
- `YARN_NODE_LINKER=node-modules` no Dockerfile.
- `@prisma/client` em dependencies.
- `prisma` em devDependencies.

### Lockfile alterado no build

Rode local:

```
yarn install
```

E comite o novo `yarn.lock`.
