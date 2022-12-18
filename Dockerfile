FROM node:18-slim
WORKDIR /code
COPY . .
EXPOSE 8080
CMD [ "node", "server.js" ]