import express from 'express';
import { GatewayServiceBController } from '../controllers/gatewayServiceBController';

export class GatewayServiceBRoutes {
  public gatewayServiceBController: GatewayServiceBController = new GatewayServiceBController();

  public routes(app: express.Application): void {
    app
      .route('/v0/serviceb/status')
      .get([], this.gatewayServiceBController.getStatus.bind(this.gatewayServiceBController));

    app
      .route('/v0/serviceb/sendServiceAPayloadMessage')
      .post([], this.gatewayServiceBController.sendServiceAPayloadMessage.bind(this.gatewayServiceBController));

    app
      .route('/v0/serviceb/sendServiceCPayloadMessage')
      .post([], this.gatewayServiceBController.sendServiceCPayloadMessage.bind(this.gatewayServiceBController));
  }
}
