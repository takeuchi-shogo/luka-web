FROM node:lts-alpine3.16
FROM nginx:alpine

WORKDIR /var/www/html

RUN apk add git

COPY ./app /var/www/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
