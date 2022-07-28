import { Request, Response } from "express";
import { GetAllAccidentsService } from "../services/GetAllAccidentsService";

export class GetAllAccidentsController {
  async handle(req: Request, res: Response) {
    const service = new GetAllAccidentsService();

    const accidents = await service.execute();

    return res.json(accidents);
  }
}
