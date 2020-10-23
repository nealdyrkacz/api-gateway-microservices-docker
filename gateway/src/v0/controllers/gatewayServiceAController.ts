import { AxiosInstance } from 'axios';
import { Request, Response } from 'express';
import { serviceAdaptor } from '../routes/serviceAdaptor';

export class GatewayServiceAController {
  private adaptor: AxiosInstance;
  constructor() {
    this.adaptor = serviceAdaptor(process.env.SERVICEA_ADAPTOR_URL);
  }

  public async getStatus(req: Request, res: Response) {
    try {
      const serviceAResponse = await this.adaptor.get('/v0/status');
      return res.status(200).send(serviceAResponse.data);
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  }

  public async sendServiceBPayloadMessage(req: Request, res: Response) {
    const serviceAResponse = await this.adaptor.post('/v0/sendServiceBPayloadMessage', req.body);
    return res.status(200).send(serviceAResponse.data);
  }

  public async sendServiceCPayloadMessage(req: Request, res: Response) {
    const serviceAResponse = await this.adaptor.post('/v0/sendServiceCPayloadMessage', req.body);
    return res.status(200).send(serviceAResponse.data);
  }
}
