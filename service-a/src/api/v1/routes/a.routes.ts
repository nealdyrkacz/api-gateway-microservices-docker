//import { Request, Response } from 'express';
import express from 'express';
import { AController } from '../controllers/a.controller';

export class ARoutes {
  public aController: AController = new AController();

  public routes(app: express.Application): void {
    app.route('/v1/a/').get([], this.aController.getAll);
  }
}
