import { Request, Response } from 'express';

export class ServerController {
  public async getStatus(req: Request, res: Response) {
    return res.status(200).send('Service B up and running!');
  }
}
