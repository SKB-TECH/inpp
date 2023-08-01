FROM node:latest
# Create app directory
RUN NODE_OPTIONS=--max-old-space-size=1024
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
# Install app dependencies
# A wildcard is used to ensure both pactage.json AND package-lock.json are copied
# where available (npm@5+)
RUN rm -rf node_modules/ --force && npm cache clean --force
RUN npm -g install npm@latest
COPY package*.json ./
RUN npm install
RUN npm run build
#To bundle your app’s source code inside the Docker image, use the COPY instruction:
COPY . .
#Your app binds to port 3000 so you’ll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 3000
CMD ["npm", "start"]
