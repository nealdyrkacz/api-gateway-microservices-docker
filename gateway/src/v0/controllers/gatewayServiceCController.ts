import { AxiosInstance } from 'axios';
import { Request, Response } from 'express';
import { serviceAdaptor } from '../routes/serviceAdaptor';

export class GatewayServiceCController {
  private adaptor: AxiosInstance;
  constructor() {
    this.adaptor = serviceAdaptor(process.env.SERVICEC_ADAPTOR_URL);
  }

  public async getStatus(req: Request, res: Response) {
    const serviceCResponse = await this.adaptor.get('/v0/status');

    return res.status(200).send(serviceCResponse.data);
  }

  public async sendServiceAPayloadMessage(req: Request, res: Response) {
    const serviceCResponse = await this.adaptor.post('/v0/sendServiceAPayloadMessage', req.body);
    return res.status(200).send(serviceCResponse.data);
  }

  public async sendServiceBPayloadMessage(req: Request, res: Response) {
    const serviceCResponse = await this.adaptor.post('/v0/sendServiceBPayloadMessage', req.body);
    return res.status(200).send(serviceCResponse.data);
  }
}
