import { AxiosInstance } from 'axios';
import { Request, Response, NextFunction } from 'express';
import { serviceAdaptor } from '../routes/serviceAdaptor';

export class GatewayServiceBController {

  private adaptor: AxiosInstance
  constructor() {
    this.adaptor = serviceAdaptor(process.env.SERVICEB_ADAPTOR_URL)
  }
  
  public async getStatus(req: Request, res: Response) {
  
    const serviceBResponse = await this.adaptor.get('/v0/status');

    return res.status(200).send(serviceBResponse.data);
  }

 
}
