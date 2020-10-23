import express from 'express';
import { GatewayServiceCController } from '../controllers/gatewayServiceCController';

export class GatewayServiceCRoutes {
  public gatewayServiceCController: GatewayServiceCController = new GatewayServiceCController();

  public routes(app: express.Application): void {
    app
      .route('/v0/servicec/status')
      .get([], this.gatewayServiceCController.getStatus.bind(this.gatewayServiceCController));

    app
      .route('/v0/servicec/sendServiceAPayloadMessage')
      .post([], this.gatewayServiceCController.sendServiceAPayloadMessage.bind(this.gatewayServiceCController));

    app
      .route('/v0/servicec/sendServiceBPayloadMessage')
      .post([], this.gatewayServiceCController.sendServiceBPayloadMessage.bind(this.gatewayServiceCController));
  }
}
