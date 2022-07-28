import { clientRepo } from "../repositories/ClientRepo";
import { vehicleRepo } from "../repositories/VehicleRepo";

interface VehicleRequest {
  name: string;
  carBrand: string;
  licensePlate: string;
  client_id: string;
}

export class CreateVehicleService {
  async execute({ name, carBrand, licensePlate, client_id }: VehicleRequest) {
    if(!(await clientRepo.findOneBy({ id: client_id }))) {
      return new Error("Client does not exist");
    }

    const vehicle = vehicleRepo.create({
      name,
      carBrand,
      licensePlate,
      client_id,
    });

    await vehicleRepo.save(vehicle);

    return vehicle;
  }
}