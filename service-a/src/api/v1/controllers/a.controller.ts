import { Request, Response } from 'express';
import { db } from '../../../database/models/';

export class AController {
  public async getAll(req: Request, res: Response) {
    const as = await db.A.findAll();

    return res.status(200).json(as);
  }
}
