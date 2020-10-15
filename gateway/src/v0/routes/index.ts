import { ServerRoutes } from './serverRoutes';
import { GatewayRoute, GatewayServiceRoute, Route } from './route';
import { GatewayServiceARoutes } from './gatewayServiceARoutes';
import express from 'express';

export function configureRoutesV0(app: express.Application): Route[] {
  const gatewayRoutes = configureGatewayRoutes(app);
  const gatewayServiceRoutes = configureGatewayServiceRoutes(app)

  return gatewayRoutes.concat(gatewayServiceRoutes);
}

function configureGatewayRoutes(app: express.Application): Route[] {
  const routes: GatewayRoute[] = [];
  routes.push(new ServerRoutes() );

  routes.forEach(route => route.routes(app));

  return routes;
}

function configureGatewayServiceRoutes(app: express.Application): Route[] {
  const routes: Route[] = [];
  routes.push(new GatewayServiceARoutes());
  routes.forEach(route => route.routes(app));

  return routes;
}
