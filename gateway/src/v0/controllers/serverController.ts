import { Request, Response } from 'express';
import { GatewayAMQPProducer } from '../lib/gatewayAMQPProducer';

export class ServerController {
  public async getStatus(req: Request, res: Response) {
    return res.status(200).send('Gateway API server up and running!');
  }

  public async sendServiceAMessage(req: Request, res: Response) {
    try {
      GatewayAMQPProducer.connect('service_a', 'Hi, Service A. - Sincerely, The Gateway');
    } catch (e) {
      console.error(e);
      res.status(500).send('There was an error sending a message to Service A.');
    }

    return res.status(200).send('Message sent to Service A.');
  }

  public async sendServiceAPayloadMessage(req: Request, res: Response) {
    try {
      GatewayAMQPProducer.connect('service_a_data', req.body);
    } catch (e) {
      console.error(e);
      res.status(500).send('There was an error sending a payload message to Service A.');
    }

    return res.status(200).send('Payload message sent to Service A.');
  }

  public async sendServiceBMessage(req: Request, res: Response) {
    try {
      GatewayAMQPProducer.connect('service_b', 'Hi, Service B. - Sincerely, The Gateway');
    } catch (e) {
      console.error(e);
      res.status(500).send('There was an error sending a message to Service B.');
    }

    return res.status(200).send('Message sent to Service B.');
  }

  public async sendServiceBPayloadMessage(req: Request, res: Response) {
    try {
      GatewayAMQPProducer.connect('service_b_data', req.body);
    } catch (e) {
      console.error(e);
      res.status(500).send('There was an error sending a payload message to Service B.');
    }

    return res.status(200).send('Payload message sent to Service B.');
  }

  public async sendServiceCMessage(req: Request, res: Response) {
    try {
      GatewayAMQPProducer.connect('service_c', 'Hi, Service C. - Sincerely, The Gateway');
    } catch (e) {
      console.error(e);
      res.status(500).send('There was an error sending a message to Service C.');
    }

    return res.status(200).send('Message sent to Service C.');
  }

  public async sendServiceCPayloadMessage(req: Request, res: Response) {
    try {
      GatewayAMQPProducer.connect('service_c_data', req.body);
    } catch (e) {
      console.error(e);
      res.status(500).send('There was an error sending a payload message to Service C.');
    }

    return res.status(200).send('Payload message sent to Service C.');
  }
}
