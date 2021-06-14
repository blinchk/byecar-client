FROM node:latest as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY ./ .
RUN npm run build

FROM socialengine/nginx-spa:latest as production-stage
COPY --from=build-stage ./dist /app
EXPOSE 8080
RUN chmod -R 777 /app
