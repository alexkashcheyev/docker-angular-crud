FROM node:14-alpine
WORKDIR /usr/src/
COPY ./ ./
RUN yarn install
RUN yarn build