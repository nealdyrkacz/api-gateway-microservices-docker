import { Request, Response } from 'express';

export class ServerController {
  public async getStatus(req: Request, res: Response) {
    console.log('fdfddf');
    return res.status(200).send('Gateway API server up and running!');
  }
}
