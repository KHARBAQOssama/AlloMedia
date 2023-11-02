#FROM node:18

#WORKDIR /app/server

#COPY package*.json ./

#RUN npm install

#COPY . .

#EXPOSE 3000

#CMD [ "npm", "run", "dev" ]

FROM node:18 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:14-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
CMD ["node", "app.js"]