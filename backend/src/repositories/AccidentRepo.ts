import { AppDataSource } from "../data-source";
import { Accident } from "../entities/Accident";

export const accidentRepo = AppDataSource.getRepository(Accident);
