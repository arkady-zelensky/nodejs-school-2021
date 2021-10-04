FROM node:14.15.4

WORKDIR /app

COPY ./ ./

RUN yarn install

RUN yarn pre:build

RUN yarn build

ENV DB_HOST=localhost

EXPOSE 3000

CMD [ "yarn", "start:build" ]
