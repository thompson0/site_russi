FROM node:20-alpine

WORKDIR /app

RUN corepack enable

RUN corepack prepare yarn@4.13.0 --activate

COPY package.json yarn.lock ./

RUN yarn install --immutable

COPY . .

RUN yarn prisma generate
RUN yarn build

EXPOSE 5000
CMD ["yarn", "start"]
