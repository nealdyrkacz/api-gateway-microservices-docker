//import { Request, Response } from 'express';
import express from 'express';
import { GatewayServiceAController } from '../controllers/gatewayServiceAController';

export class GatewayServiceARoutes {
  public gatewayServiceAController: GatewayServiceAController = new GatewayServiceAController();

  public routes(app: express.Application): void {
    app
      .route('/v0/servicea/status')
      .get([], this.gatewayServiceAController.getStatus.bind(this.gatewayServiceAController));

    app
      .route('/v0/servicea/sendServiceBPayloadMessage')
      .post([], this.gatewayServiceAController.sendServiceBPayloadMessage.bind(this.gatewayServiceAController));

    app
      .route('/v0/servicea/sendServiceCPayloadMessage')
      .post([], this.gatewayServiceAController.sendServiceCPayloadMessage.bind(this.gatewayServiceAController));
  }
}
