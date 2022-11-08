# BUILDER
FROM node:18-alpine As build
RUN corepack enable & apk add --no-cache libc6-compat
WORKDIR /app
COPY . .

RUN yarn --frozen-lockfile && yarn build

ENV NODE_ENV production


# PROD RUNNER
FROM node:18-alpine As production
RUN corepack enable
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

CMD ["node", "dist/main.js"]
