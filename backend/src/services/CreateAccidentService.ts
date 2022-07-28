import { accidentRepo } from "../repositories/AccidentRepo";
import { clientRepo } from "../repositories/ClientRepo";

interface AccidentRequest {
  description: string;
  client_id: string;
}

export class CreateAccidentService {
  async execute({ description, client_id }: AccidentRequest) {
    if(!(await clientRepo.findOneBy({ id: client_id }))) {
      return new Error("Client does not exist");
    }

    const accident = accidentRepo.create({
      description,
      client_id,
    });

    await accidentRepo.save(accident);

    return accident;
  }
}