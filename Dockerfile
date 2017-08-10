FROM node:6
RUN git clone https://github.com/1gory/case-shop
WORKDIR /case-shop
RUN npm install
CMD ["npm", "start"]