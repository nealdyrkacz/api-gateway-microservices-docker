//import { Request, Response } from 'express';
import express from 'express';
import { ServerController } from '../controllers/server.controller';

export class ServerRoutes {
  public serverController: ServerController = new ServerController();

  public routes(app: express.Application): void {
    app.route('/v1/status').get(this.serverController.getStatus);
  }
}
