FROM node:24-alpine

WORKDIR /app

COPY ../back/package*.json ./

RUN npm install

COPY ../back/ ./

CMD ["node", "index.js"]
