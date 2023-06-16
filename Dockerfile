FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

COPY . .

EXPOSE 3213

CMD ["node", "server.js"]
