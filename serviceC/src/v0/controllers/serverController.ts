import { Request, Response } from 'express';
import { ServiceCAMQPProducer } from '../lib/amqp/serviceCAMQPProducer';

export class ServerController {
  public async getStatus(req: Request, res: Response) {
    return res.status(200).send('Service C up and running!');
  }

  public async sendServiceAPayloadMessage(req: Request, res: Response) {
    ServiceCAMQPProducer.connect('service_a_data', req.body);
    return res.status(200).send();
  }
  public async sendServiceBPayloadMessage(req: Request, res: Response) {
    ServiceCAMQPProducer.connect('service_b_data', req.body);
    return res.status(200).send();
  }
}
