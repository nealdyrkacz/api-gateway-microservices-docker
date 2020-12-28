//import { Request, Response } from 'express';
import express from 'express';
import { GatewayServiceAController } from '../controllers/service-a.controller';

export class GatewayServiceARoutes {
  public gatewayServiceAController: GatewayServiceAController = new GatewayServiceAController();

  public routes(app: express.Application): void {
    app
      .route('/v1/servicea/status')
      .get([], this.gatewayServiceAController.getStatus.bind(this.gatewayServiceAController));

    app.route('/v1/a').get([], this.gatewayServiceAController.getAll.bind(this.gatewayServiceAController));
    app.route('/v1/a/:aId').get([], this.gatewayServiceAController.getById.bind(this.gatewayServiceAController));
  }
}
