FROM node:15

WORKDIR /opt/app

ADD package.json .
ADD yarn.lock .

RUN yarn

COPY . .

EXPOSE 3000
CMD yarn start

