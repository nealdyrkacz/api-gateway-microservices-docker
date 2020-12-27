# Getting the base image for node app
FROM node:12.20.0-alpine


#Create the directory for application
RUN mkdir -p /app

#Switching the Working directory
WORKDIR /app

# Copying the package.json to container
#COPY package.json .
COPY package.json tsconfig.json /app/

#Installing the dependencies
RUN npm i

# Copying the content to container
COPY . /app

#ENV 
ENV NODE_ENV development

#TYPESCRIPT
RUN npm run build

# Opening the port from container
EXPOSE  5001

# Starting pointing for the application.
CMD ["npm", "run", "servicea:dev:start"]
#ENTRYPOINT ["bin/sh", "npm", "run", "servicea:dev:start"]