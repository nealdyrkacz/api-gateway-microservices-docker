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
