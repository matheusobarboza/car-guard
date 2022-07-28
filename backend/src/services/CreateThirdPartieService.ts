import { thirdPartieRepo } from "../repositories/ThirdPartie";
import { vehicleRepo } from "../repositories/VehicleRepo";

interface ThirdPartieRequest {
  name: string;
  identification: string;
  accident_id: string;
}

export class CreateThirdPartieService {
  async execute({ name, identification, accident_id }: ThirdPartieRequest) {
    // if(!(await accidentRepo.findOneBy({ id: accident_id }))) {
    //   return new Error("Accident does not exist");
    // }

    const thirdPartie = thirdPartieRepo.create({
      name,
      identification,
      accident_id,
    });

    await vehicleRepo.save(thirdPartie);

    return thirdPartie;
  }
}