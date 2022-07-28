import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Accident } from "./Accident";
import { Client } from "./Client";

@Entity("vehicles")
export class Vehicle {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;
  
  @Column()
  carBrand: string;

  @Column()
  licensePlate: string;

  @Column()
  client_id: string;

  @ManyToOne(() => Client, (client) => client.vehicles)
  @JoinColumn({ name: "client_id" })
  client: Client;

  @ManyToOne(() => Accident, (accidents) => accidents.vehicles)
  accidents: Accident[];
}
