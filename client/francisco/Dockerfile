
# Fetching the latest node image on alpine linux
FROM node:alpine AS build

# Installing dependencies
COPY package.json package.json

RUN npm install
COPY . .
RUN npm run build

# Starting our application
FROM nginx:stable-alpine

COPY --from=build /build /usr/share/nginx/html
COPY --from=build nginx.conf /ect/nginx/conf.d/default.conf
EXPOSE 3000

CMD ["nginx","-g","daemon off;"]