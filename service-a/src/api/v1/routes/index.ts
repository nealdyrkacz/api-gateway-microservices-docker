import { ServerRoutes } from './server.routes';
import { ARoutes } from './a.routes';
import { Route } from './route';
import express from 'express';

export function configureRoutes(app: express.Application): Route[] {
  const routes: Route[] = [];
  routes.push(new ServerRoutes());
  routes.push(new ARoutes());

  routes.forEach(route => route.routes(app));

  return routes;
}
