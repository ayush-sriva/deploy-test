FROM node:16
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm config set fetch-retry-maxtimeout 120000
RUN npm config set fetch-retry-mintimeout 20000
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 8080
RUN npx msw init public --save
CMD ["npm","start"]