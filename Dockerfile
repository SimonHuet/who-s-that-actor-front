FROM node:lts-alpine

RUN mkdir -p /home/app/node_modules && chown -R node:node /home/app

WORKDIR /home/app

COPY package.json ./

USER node

RUN npm install

COPY --chown=node:node . .

CMD npm start
