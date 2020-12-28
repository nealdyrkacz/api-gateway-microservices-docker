import { AxiosInstance } from 'axios';
import { Request, Response } from 'express';
import { serviceAdaptor } from '../routes/service.adaptor';

export class GatewayServiceAController {
  private adaptor: AxiosInstance;
  constructor() {
    this.adaptor = serviceAdaptor(process.env.SERVICEA_ADAPTOR_URL);
  }

  public async getStatus(req: Request, res: Response): Promise<Response> {
    try {
      const serviceAResponse = await this.adaptor.get('/v1/status');
      return res.status(200).send(serviceAResponse.data);
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  }
  public async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const serviceAResponse = await this.adaptor.get('/v1/a');
      return res.status(200).send(serviceAResponse.data);
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    try {
      const serviceAResponse = await this.adaptor.get('/v1/a/' + req.params.aId);
      return res.status(200).send(serviceAResponse.data);
    } catch (e) {
      console.error(e);
      return res.status(500).send(e);
    }
  }
}
