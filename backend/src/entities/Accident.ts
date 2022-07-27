import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client";
import { ThirdPartie } from "./ThirdPartie";
import { Vehicle } from "./Vehicle";

@Entity('accidents')
export class Accident {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: "text" })
  description: string

  @ManyToOne(() => Client, client => client.accidents)
  client: Client
  
  @ManyToOne(() => Vehicle, vehicles => vehicles.accidents)
  vehicles: Vehicle

  @ManyToMany(() => ThirdPartie, thirdPartie => thirdPartie.accidents)
  thirdParties: ThirdPartie[]
}