FROM node:18-alpine AS base

# Install OpenSSL and other dependencies
RUN apk add --no-cache openssl libc6-compat

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Generate Prisma Client with correct permissions
COPY prisma ./prisma
RUN mkdir -p node_modules/.prisma/client && \
    chmod -R 777 node_modules/@prisma node_modules/.prisma && \
    npx prisma generate

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Copy all dependencies and prisma generated files
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/node_modules/.prisma ./node_modules/.prisma
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1

# Build application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs && \
    mkdir -p public/images .next && \
    chown nextjs:nodejs .next

# Copy necessary files
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/prisma ./prisma
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Set correct permissions for Prisma
RUN chown -R nextjs:nodejs /app/node_modules/.prisma /app/node_modules/@prisma

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"] 