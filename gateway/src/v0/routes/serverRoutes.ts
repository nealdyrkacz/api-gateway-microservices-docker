//import { Request, Response } from 'express';
import express from 'express';
import { ServerController } from '../controllers/serverController';

export class ServerRoutes {
  public serverController: ServerController = new ServerController();

  public routes(app: express.Application): void {
    app.route('/v0/status').get(this.serverController.getStatus);
    app.route('/v0/sendServiceAMessage').post(this.serverController.sendServiceAMessage);
    app.route('/v0/sendServiceBMessage').post(this.serverController.sendServiceBMessage);
    app.route('/v0/sendServiceCMessage').post(this.serverController.sendServiceCMessage);
  }
}
