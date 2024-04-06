FROM node:18-alpine as builder
WORKDIR /my-space

COPY package.json package-lock.json ./
RUN npm ci
COPY src ./src
COPY public ./public

RUN npm run build

FROM node:18-alpine as runner
WORKDIR /my-space
COPY --from=builder /my-space .

EXPOSE 443
CMD ["npm", "start"]
