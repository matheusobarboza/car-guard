import { useFetch } from "../hooks/useFetch";

interface ClientRequest {
  name: string;
  identification: string;
  vehicles?: Array<VehicleRequest>;
}
interface VehicleRequest {
  name: string;
  carBrand: string;
  licensePlate: string;
  client_id: string;
}

export function Clients() {
  const { data: clients, isFetching } = useFetch<ClientRequest[]>("clients");

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {clients?.map((client) => {
        return (
          <li key={client.identification}>
            <strong>{client.name}</strong>
          </li>
        );
      })}
    </ul>
  );
}
