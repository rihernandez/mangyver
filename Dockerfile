FROM node:16-alpine

USER root

RUN ln -sf /usr/share/zoneinfo/America/Santo_Domingo /etc/localtime

RUN addgroup mangyver
RUN adduser -D -G mangyver mangyver

RUN npm install -g npm@7.19.1
# RUN npm install pm2 -g

COPY ./app /home/mangyver/app
WORKDIR /home/mangyver/app
RUN npm install
RUN npm run build
# RUN npm start

EXPOSE 80
ENV DOCKER_REGISTRY appfactorymaz.azurecr.io
CMD ["npm", "start"]