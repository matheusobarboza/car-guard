import { AppDataSource } from "../data-source";
import { ThirdPartie } from "../entities/ThirdPartie";

export const thirdPartieRepo = AppDataSource.getRepository(ThirdPartie);
