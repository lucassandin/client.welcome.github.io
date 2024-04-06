FROM node:18-alpine as builder
WORKDIR /my-space

COPY package.json package-lock.json ./
RUN npm ci
# Copia o código-fonte da aplicação
COPY src ./src
COPY public ./public

RUN npm run build

FROM node:18-alpine as runner
WORKDIR /my-space
COPY --from=builder /my-space .
EXPOSE 8080
CMD ["npx", "next", "start"]

# nginx base image
# FROM nginx:stable-alpine3.17-slim

# copy static contents of project to nginx html
# COPY nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/dist/ /usr/share/nginx/html

# COPY tls.crt /etc/ssl/tls.crt
# COPY tls.key /etc/ssl/tls.key

# When the container starts, replace the env.js with values from environment variables
# CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

# Execute o aplicativo 
CMD ["npm", "start"]

EXPOSE 443
