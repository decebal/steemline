FROM node:8-alpine

WORKDIR /var/www/steemline

# The official image has verbose logging; change it to npm's default
ENV NPM_CONFIG_LOGLEVEL warn

# Add PM2, for Node process management
RUN npm i -g pm2

# Add NPM package config
ADD package*.json ./

# Install everything (and clean up afterwards)
RUN apk add --no-cache --virtual .gyp \
    autoconf \
    automake \
    g++ \
    libpng-dev \
    libtool \
    make \
    nasm \
    git \
    python \
  && npm i \
  && apk del .gyp

# Build Artefacts
ADD src ./src
ADD build ./build
ADD config ./config
ADD static ./static
ADD .eslintrc.js ./.eslintrc.js
ADD .babelrc ./.babelrc
ADD .postcssrc.js ./.postcssrc.js
ADD index.html ./index.html
ADD docker/process.production.yml ./process.yml

RUN npm run build

# Start the server by default
CMD pm2-docker start process.yml -i max --web 81
