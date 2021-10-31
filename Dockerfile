FROM node:14 as build

WORKDIR /app

COPY . .

RUN npm install && npm run build && npm run generate

FROM nginx:1.14.0

COPY --from=build /app/dist /usr/share/nginx/html/
COPY --from=build /app/nginx /etc/nginx/conf.d/

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]

