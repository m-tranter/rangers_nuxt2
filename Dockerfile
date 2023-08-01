FROM node:18-alpine as build
# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install
RUN npm run build

EXPOSE 3001

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=3001

CMD [ "npm", "start" ]
