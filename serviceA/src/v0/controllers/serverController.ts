import { Request, Response } from 'express';
import { ServiceAAMQPProducer } from '../lib/amqp/serviceAAMQPProducer';

export class ServerController {
  public async getStatus(req: Request, res: Response) {
    return res.status(200).send('Service A up and running!');
  }
  public async sendServiceBPayloadMessage(req: Request, res: Response) {
    ServiceAAMQPProducer.connect('service_b_data', req.body);
    return res.status(200).send();
  }
  public async sendServiceCPayloadMessage(req: Request, res: Response) {
    ServiceAAMQPProducer.connect('service_c_data', req.body);
    return res.status(200).send();
  }
}
