import { vehicleRepo } from "../repositories/VehicleRepo";

export class GetAllVehiclesService {
  async execute() {
    const vehicles = await vehicleRepo.find();

    return vehicles;
  }
}
