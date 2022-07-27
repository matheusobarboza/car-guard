import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./client";
import { ThirdPartie } from "./ThirdPartie";

@Entity('accidents')
export class Accident {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: "text" })
  description: string

  @ManyToOne(() => Client, client => client.accidents)
  client: Client

  @ManyToMany(() => ThirdPartie, thirdPartie => thirdPartie.accidents)
  thirdParties: ThirdPartie[]
}