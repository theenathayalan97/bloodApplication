# FROM node:v16-alpine

# RUN mkdir node
# COPY . ./nodedocker build -t your-image-name .

# WORKDIR ./node/

# RUN npm install 

# EXPOSE 8081

# CMD node index.js

FROM node:16-alpine

RUN mkdir /app
WORKDIR /app

COPY . .

RUN npm install

EXPOSE 8081

CMD ["node", "index.js"]
