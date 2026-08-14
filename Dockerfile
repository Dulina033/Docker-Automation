FROM node:22-alpine

WORKDIR /usr/src/app

COPY nodeapp/package*.json ./

RUN npm ci

COPY nodeapp/ ./

USER node

EXPOSE 3000

CMD ["npm", "start"]