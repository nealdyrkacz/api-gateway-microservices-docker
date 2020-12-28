# API RESTful Gateway & REST Microservices DOCKERIZED


## Setup

### env
**Gateway**
```
SERVICEA_ADAPTOR_URL = http://service-a:5001/
```

**Service A**
```
DB_HOST=service-a-db
DB_USERNAME=admin
DB_PASSWORD=secret
DB=service-a
DB_DIALECT=postgres
```

## Run
**docker-compose up --build**

### Seed Service A DB
In another terminal window -> ```docker exec -it service-a npx sequelize db:seed:all```

### PG ADMIN ###
A pgAdmin4 image has been added to the docker-compose, once all the containers are running go to ```localhost:8080``` which will bring in the log in screen. Use credentials found in docker-compose file.  Create a new server / db based off docker-compose service names and Service A ```.env``` file
