FROM node:23-alpine3.20

WORKDIR /app/frontend

COPY package*.json ./

RUN npm install

COPY . .

# openssl rand -hex 32
ENV AUTH_SECRET = "my_auth_secret"

EXPOSE 3000

CMD ["npm", "run", "dev"]

