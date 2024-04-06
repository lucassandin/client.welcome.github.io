FROM node:18-alpine as builder
WORKDIR /my-space

COPY package.json package-lock.json ./
RUN npm ci
COPY src ./src
COPY public ./public

RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /my-space /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]