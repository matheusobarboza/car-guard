import { Request, Response } from "express";
import { GetAllClientsService } from "../services/GetAllClientsService";

export class GetAllClientsController {
  async handle(req: Request, res: Response) {
    const service = new GetAllClientsService();

    const clients = await service.execute();

    return res.json(clients);
  }
}
