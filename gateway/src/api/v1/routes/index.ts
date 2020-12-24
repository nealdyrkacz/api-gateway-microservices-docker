import { ServerRoutes } from './serverRoutes';
import { Route } from './route';
import { GatewayServiceARoutes } from './gatewayServiceARoutes';
import express from 'express';

function configureGatewayRoutes(app: express.Application): Route[] {
  const routes: Route[] = [];
  routes.push(new ServerRoutes());

  routes.forEach(route => route.routes(app));

  return routes;
}

function configureGatewayServiceRoutes(app: express.Application): Route[] {
  const routes: Route[] = [];
  routes.push(new GatewayServiceARoutes());
  routes.forEach(route => route.routes(app));

  return routes;
}

export function configureRoutes(app: express.Application): Route[] {
  const gatewayRoutes = configureGatewayRoutes(app);
  const gatewayServiceRoutes = configureGatewayServiceRoutes(app);

  return gatewayRoutes.concat(gatewayServiceRoutes);
}
