import { Request, Response } from 'express';
import { ServiceBAMQPProducer } from '../lib/amqp/serviceBAMQPProducer';

export class ServerController {
  public async getStatus(req: Request, res: Response) {
    return res.status(200).send('Service B up and running!');
  }
  public async sendServiceAPayloadMessage(req: Request, res: Response) {
    ServiceBAMQPProducer.connect('service_b_data', req.body);
    return res.status(200).send();
  }
  public async sendServiceCPayloadMessage(req: Request, res: Response) {
    ServiceBAMQPProducer.connect('service_c_data', req.body);
    return res.status(200).send();
  }
}
