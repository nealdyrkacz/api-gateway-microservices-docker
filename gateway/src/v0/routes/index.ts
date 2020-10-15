import { ServerRoutes } from './serverRoutes';
import { Route } from './route';
import { GatewayServiceARoutes } from './gatewayServiceARoutes';
import express from 'express';
import { GatewayServiceBRoutes } from './gatewayServiceBRoutes';
import { GatewayServiceCRoutes } from './gatewayServiceCRoutes';

export function configureRoutesV0(app: express.Application): Route[] {
  const gatewayRoutes = configureGatewayRoutes(app);
  const gatewayServiceRoutes = configureGatewayServiceRoutes(app)

  return gatewayRoutes.concat(gatewayServiceRoutes);
}

function configureGatewayRoutes(app: express.Application): Route[] {
  const routes: Route[] = [];
  routes.push(new ServerRoutes() );

  routes.forEach(route => route.routes(app));

  return routes;
}

function configureGatewayServiceRoutes(app: express.Application): Route[] {
  const routes: Route[] = [];
  routes.push(new GatewayServiceARoutes());
  routes.push(new GatewayServiceBRoutes());
  routes.push(new GatewayServiceCRoutes());
  routes.forEach(route => route.routes(app));

  return routes;
}
