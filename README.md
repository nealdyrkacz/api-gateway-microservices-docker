# API Gateway & 3 Microservices with RabbitMQ
A simple tempate project to use to understand and work with a Microservices system fronted by a Gateway.  All 4 projects (Gateway & 3 services) are written in Node/Typescript and using Express for simplicity, each of the projects could be broken out and any number of technology stacks could be used.

## Project Breakdown
**gateway** : The main entry point to the application.  The gateway is essentially an API that all requests go through before being routed to its respective microservice.  Authorization & Authentication should happen in this part of the system.
**serviceA / serviceB / serviceC** : 3 bare bones APIs that look much like the **gateway** API.  These can be turned into whatever is needed in the form of a service.  Requests are routed from the Gateway to Service with the RESTful ability or the use of RabbitMQ message broker to send to message queues which services can consume.


## Setup & Run

**.env**
```
SERVICEA_ADAPTOR_URL = http://localhost:5001/
SERVICEB_ADAPTOR_URL = http://localhost:5002/
SERVICEC_ADAPTOR_URL = http://localhost:5003/
```

1. Install RabbitMQ and Erlang.  If using Homebrew ( super easy ), Erlang should be a dependency that gets installed when installing RabbitMQ.  (Update PATH var in your bash profile script)
2. Clone / Download Repo
3. `npm run setup` on project root.  This will install eslint/prettier in the root since ALL projects are JS and then it will install packages for each of the 4 projects.
4. Open 5 terminal windows. Yes, 5.  I like to see each app running in the foreground with logging.
5. **RabbitMQ** : run `rabbitmq-server` and it should start up if your PATH vars are set right, otherwise you can start in the background as a brew service.  http://localhost:15672/ is the admin dashboard.  Default username/password is `guest`.
6. **gateway** : cd into gateway dir & `npm start` or to use ts-node-dev `npm run gateway:dev:start`
7. **serviceA** : cd into serviceA dir & `npm start` or to use ts-node-dev `npm run servicea:dev:start`
8. **serviceB** : cd into serviceB dir & `npm start` or to use ts-node-dev `npm run serviceb:dev:start`
9. **serviceC** : cd into serviceC dir & `npm start` or to use ts-node-dev `npm run servicec:dev:start`

## Using the system
Included in the repo is a Postman collection **Gateway & Microservices.postman_collection.json**, import that into your Postman and send some requests out!
View the requests going out and messages in the terminal windows.

## What's next?
A lot of things.....

