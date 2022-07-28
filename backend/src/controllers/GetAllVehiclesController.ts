import { Request, Response } from "express";
import { GetAllVehiclesService } from "../services/GetAllVehiclesService";

export class GetAllVehiclesController {
  async handle(req: Request, res: Response) {
    const service = new GetAllVehiclesService();

    const vehicles = await service.execute();

    return res.json(vehicles);
  }
}
