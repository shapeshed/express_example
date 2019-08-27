FROM node:10-alpine
WORKDIR /usr/src/app
ADD . ./
RUN npm install
EXPOSE 3000
CMD npm start
