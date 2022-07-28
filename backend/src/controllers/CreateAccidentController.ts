import { Request, Response } from "express";
import { CreateAccidentService } from "../services/CreateAccidentService";

export class CreateAccidentController {
  async handle(req: Request, res: Response) {
    const { description, client_id } = req.body;

    const service = new CreateAccidentService();

    const result = await service.execute({
      description,
      client_id,
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}
