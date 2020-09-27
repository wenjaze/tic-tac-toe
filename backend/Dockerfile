FROM node:12

WORKDIR /app

COPY ["./package.json", "./package-*", "./"]

RUN npm install --production --silent

COPY . .

CMD ["npm", "start"]