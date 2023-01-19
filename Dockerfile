FROM node:16.18.0

WORKDIR /project

COPY package.json /project/package.json

RUN npm install -g @angular/cli

RUN npm install

COPY ./ /project/

CMD ["ng","serve","host","0.0.0.0"]

EXPOSE 4200