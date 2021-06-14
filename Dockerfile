FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM socialengine/nginx-spa:latest
COPY ./dist /app
RUN chmod -R 777 /app
