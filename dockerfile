# Rebuild the source code only when needed
FROM node:20.9.0 AS builder
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM node:20.9.0-alpine AS runner
ENV PORT=3000
RUN apk add --no-cache libc6-compat
USER node
WORKDIR /build
COPY --chown=node:node package.json package-lock.json ./
RUN npm install --production
COPY --chown=node:node --from=builder /build/app ./app
COPY --chown=node:node --from=builder /build/.next ./.next
COPY --chown=node:node --from=builder /build/next.config.mjs ./next.config.mjs
COPY --chown=node:node --from=builder /build/postcss.config.mjs ./postcss.config.mjs
COPY --chown=node:node --from=builder /build/tailwind.config.ts ./tailwind.config.ts
COPY --chown=node:node --from=builder /build/tsconfig.json ./tsconfig.json
COPY --chown=node:node --from=builder /build/public ./public

EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]
