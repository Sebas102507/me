# Multi-stage Dockerfile for local dev and optional preview

# Base stage with correct Node version for Vite 7 and plugin requirements
FROM node:22-alpine AS base
WORKDIR /app

# Install dependencies (cached)
COPY package.json package-lock.json* .npmrc* ./
RUN npm ci || npm install

# Development stage
FROM base AS dev
WORKDIR /app
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev"]

# Build stage
FROM base AS build
WORKDIR /app
COPY . .
ARG VITE_GITHUB_USERNAME
ENV VITE_GITHUB_USERNAME=$VITE_GITHUB_USERNAME
RUN npm run build

# Preview stage to serve the built app (optional)
FROM node:22-alpine AS preview
WORKDIR /app
COPY --from=build /app/dist ./dist
RUN npm i -g serve
EXPOSE 4173
CMD ["serve", "-s", "dist", "-l", "4173"]
