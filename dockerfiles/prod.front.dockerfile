FROM node:lts-alpine

RUN npm install -g http-server

WORKDIR /app

COPY ../env/prod.front.env ./.env

COPY ../front/package*.json ./

RUN npm install

COPY ../front/ ./

RUN npm run build

CMD [ "http-server", "dist", "--proxy", "http://10.0.100.210:8084?" ]