import { Request, Response } from "express";
import { CreateClientService } from "../services/CreateClientService";

export class CreateClientController {
  async handle(req: Request, res: Response) {
    const { name, identification } = req.body;

    const service = new CreateClientService();

    const result = await service.execute({ name, identification });

    if(result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}