import { clientRepo } from "../repositories/ClientRepo";

export class GetAllClientsService {
  async execute() {
    const clients = await clientRepo.find({
      relations: {
        vehicles: true,
      }
    });

    return clients;
  }
}
