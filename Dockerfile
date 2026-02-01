FROM node:22-slim AS builder

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json* .
RUN npm ci

COPY . .
RUN npx quartz build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder --chmod=777 /usr/src/app/public /app

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
