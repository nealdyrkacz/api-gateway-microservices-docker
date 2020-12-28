import { Request, Response } from 'express';
import { AService } from '../../../modules/services/a.service';

export class AController {
  public async getAll(req: Request, res: Response): Promise<Response> {
    const aService = new AService();
    const as = await aService.findAll();
    return res.status(200).json(as);
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const aId = req.params.aId;
    const aService = new AService();
    const a = await aService.findById(aId);
    return res.status(200).json(a);
  }
}
