FROM node:alpine
COPY . . 
RUN rm -rf node_modules
WORKDIR /src
RUN npm install
CMD ["npm","start"]
EXPOSE 3000