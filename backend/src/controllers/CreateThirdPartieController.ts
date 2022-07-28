import { Request, Response } from "express";
import { CreateThirdPartieService } from "../services/CreateThirdPartieService";

export class CreateThirdPartieController {
  async handle(req: Request, res: Response) {
    const { name, identification, accident_id } = req.body;

    const service = new CreateThirdPartieService();

    const result = await service.execute({
      name,
      identification,
      accident_id
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}
