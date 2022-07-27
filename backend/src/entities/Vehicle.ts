import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client";

@Entity('vehicles')
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: "text" })
  CarBrand: string

  @Column({ type: "text" })
  licensePlate: string

  @ManyToOne(() => Client, (client) => client.vehicles)
  client: Client;
}