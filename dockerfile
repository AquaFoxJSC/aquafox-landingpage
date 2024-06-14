# Install dependencies only when needed
FROM node:18.17.1-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm install --production

# Rebuild the source code only when needed
FROM node:18.17.1-alpine AS builder
WORKDIR /build
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM node:18.17.1-alpine AS runner
WORKDIR /build
USER node
COPY --chown=node:node --from=builder /build/app ./app
COPY --chown=node:node --from=builder /build/.next ./.next
COPY --chown=node:node --from=deps /build/node_modules ./node_modules
COPY --chown=node:node --from=builder /build/package.json ./package.json
COPY --chown=node:node --from=builder /build/next.config.mjs ./next.config.mjs
COPY --chown=node:node --from=builder /build/postcss.config.mjs ./postcss.config.mjs
COPY --chown=node:node --from=builder /build/tailwind.config.ts ./tailwind.config.ts
COPY --chown=node:node --from=builder /build/tsconfig.json ./tsconfig.json

EXPOSE 3000
ENV PORT 3000
CMD ["node_modules/.bin/next", "start"]
