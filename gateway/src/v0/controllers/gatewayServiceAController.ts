import { AxiosInstance } from 'axios';
import { Request, Response } from 'express';
import { serviceAdaptor } from '../routes/serviceAdaptor';

export class GatewayServiceAController {
  private adaptor: AxiosInstance;
  constructor() {
    this.adaptor = serviceAdaptor(process.env.SERVICEA_ADAPTOR_URL);
  }

  public async getStatus(req: Request, res: Response) {
    const serviceAResponse = await this.adaptor.get('/v0/status');
    return res.status(200).send(serviceAResponse.data);
  }

  public async sendServiceBMessage(req: Request, res: Response) {
    const serviceAResponse = await this.adaptor.post('/v0/sendServiceBMessage', req.body);
    return res.status(200).send(serviceAResponse.data);
  }
}
