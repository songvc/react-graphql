FROM node:12 

COPY . /opt/app

WORKDIR /opt/app

RUN npm cache clean --force && npm install

CMD [ "npm", "run", "watch" ]
