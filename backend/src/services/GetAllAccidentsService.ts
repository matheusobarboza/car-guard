import { accidentRepo } from "../repositories/AccidentRepo";

export class GetAllAccidentsService {
  async execute() {
    const accidents = await accidentRepo.find({
      relations: {
        client: true
      }
    });

    return accidents;
  }
}
