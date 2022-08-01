import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
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
  const { data, isFetching } = useQuery<ClientRequest[]>(['clients'], async () => {
    const response = await axios.get('http://localhost:3000/clients')

    return response.data;
  })

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map((client) => {
        return (
          <li key={client.identification}>
            <strong>{client.name}</strong>
            <p>{client.identification}</p>
          </li>
        );
      })}
    </ul>
  );
}
