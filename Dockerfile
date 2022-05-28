# pull the official base image
FROM node: 18-alpine3.14
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN yarn install
COPY . ./
CMD ["yarn", "start"]
EXPOSE 8000
