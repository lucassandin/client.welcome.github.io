# imagem
FROM node:21.7.1-alpine as build

RUN mkdir -p /app
# working directory
WORKDIR /app

# copy
COPY . ./

RUN npm config set strict-ssl false

# run npm install
RUN npm install &&\
  npm run build:prod

# nginx base image
FROM nginx:stable-alpine3.17-slim

# copy static contents of project to nginx html
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist/ /usr/share/nginx/html

# COPY tls.crt /etc/ssl/tls.crt
# COPY tls.key /etc/ssl/tls.key

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]

EXPOSE 443
