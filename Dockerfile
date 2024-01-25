FROM node:16.0.0 as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build:dev

FROM nginx:1.13.12-alpine as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

#docker build -t sol-shell .
#docker run -p 8080:8080 --name dockerize-vue-sol-shell -d sol-shell
