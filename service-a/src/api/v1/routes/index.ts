import { ServerRoutes } from './serverRoutes';
import { Route } from './route';
import express from 'express';

export function configureRoutes(app: express.Application): Route[] {
  const routes: Route[] = [];
  routes.push(new ServerRoutes());

  routes.forEach(route => route.routes(app));

  return routes;
}
