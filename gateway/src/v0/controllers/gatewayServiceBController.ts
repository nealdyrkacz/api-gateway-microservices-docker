import { AxiosInstance } from 'axios';
import { Request, Response } from 'express';
import { serviceAdaptor } from '../routes/serviceAdaptor';

export class GatewayServiceBController {
  private adaptor: AxiosInstance;
  constructor() {
    this.adaptor = serviceAdaptor(process.env.SERVICEB_ADAPTOR_URL);
  }

  public async getStatus(req: Request, res: Response) {
    const serviceBResponse = await this.adaptor.get('/v0/status');

    return res.status(200).send(serviceBResponse.data);
  }

  public async sendServiceAPayloadMessage(req: Request, res: Response) {
    const serviceBResponse = await this.adaptor.post('/v0/sendServiceAPayloadMessage', req.body);
    return res.status(200).send(serviceBResponse.data);
  }

  public async sendServiceCPayloadMessage(req: Request, res: Response) {
    const serviceBResponse = await this.adaptor.post('/v0/sendServiceCPayloadMessage', req.body);
    return res.status(200).send(serviceBResponse.data);
  }
}
