import { AppDataSource } from "../data-source";
import { Vehicle } from "../entities/Vehicle";

export const vehicleRepo = AppDataSource.getRepository(Vehicle);
