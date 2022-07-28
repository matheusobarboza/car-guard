import { Request, Response } from "express";
import { CreateVehicleService } from "../services/CreateVehicleService";

export class CreateVehicleController {
  async handle(req: Request, res: Response) {
    const { name, carBrand, licensePlate, client_id } = req.body;

    const service = new CreateVehicleService();

    const result = await service.execute({
      name,
      carBrand,
      licensePlate,
      client_id
    });

    if (result instanceof Error) {
      return res.status(400).json(result.message);
    }

    return res.json(result);
  }
}
