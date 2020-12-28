import { Request, Response } from 'express';

export class ServerController {
  public async getStatus(req: Request, res: Response): Promise<Response> {
    return res.status(200).send('Gateway API server up and running!');
  }
}
