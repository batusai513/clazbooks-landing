FROM node:12.7.0-alpine

WORKDIR '/app'

COPY package.json .

RUN yarn

COPY . .

ENV API_SERVER https://mobile.clazbooks.com/api

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
