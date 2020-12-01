FROM node:alpine

WORKDIR /app
COPY package*.json ./
RUN npm install --prod
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]