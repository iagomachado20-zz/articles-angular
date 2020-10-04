FROM node:12.18.3 as node
WORKDIR /app
COPY package.json /app/
RUN npm i npm@latest -g
RUN npm install
COPY ./ /app/
ARG env=prod
RUN npm run build

FROM nginx:1.13
COPY --from=node /app/dist/angular-articles /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf