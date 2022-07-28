import { Client } from "../entities/Client";
import { clientRepo } from "../repositories/ClientRepo";

interface ClientRequest {
  name: string;
  identification: string;
}

export class CreateClientService {
  async execute({ name, identification }: ClientRequest): Promise<Client | Error> {
    if (await clientRepo.findOneBy({ name: name })) {
      return new Error("Client already exists");
    }

    const client = clientRepo.create({
      name,
      identification,
    });

    await clientRepo.save(client);

    return client;
  }
}