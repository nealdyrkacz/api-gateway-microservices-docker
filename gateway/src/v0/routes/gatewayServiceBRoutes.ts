import { AxiosInstance } from 'axios';
//import { Request, Response } from 'express';
import express from 'express';
import { GatewayServiceBController } from '../controllers/gatewayServiceBController';

export class GatewayServiceBRoutes {
  public gatewayServiceBController: GatewayServiceBController = new GatewayServiceBController();

  public routes(app: express.Application): void {
    app
      .route('/v0/serviceb/status')
      .get([], this.gatewayServiceBController.getStatus.bind(this.gatewayServiceBController));
  }
}
