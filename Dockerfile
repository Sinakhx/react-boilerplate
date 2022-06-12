# pull the official base image
FROM node:16-gallium AS builder
ENV NODE_ENV production
# set working direction
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# install application dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm i
RUN npm run build
# add app
COPY . ./
# start app
# CMD ["npm", "run", "preview"]
ENTRYPOINT ["npm", "run", "preview"]