FROM node:20.11-buster

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8090

CMD [ "npm", "run", "preview" ]