FROM node:lts-alpine

WORKDIR /app

COPY ../front/package*.json ./

RUN npm install

COPY ../front/ ./

CMD [ "npm", "run", "dev" ]
