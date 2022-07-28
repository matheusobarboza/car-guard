import {
  Column,
  Entity,
  JoinColumn, ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn
} from "typeorm";
import { Client } from "./Client";
import { ThirdPartie } from "./ThirdPartie";

@Entity("accidents")
export class Accident {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  description: string;

  @Column()
  client_id: string;

  @ManyToOne(() => Client, (client) => client.accidents)
  @JoinColumn({ name: "client_id" })
  client: Client;

  @OneToMany(() => ThirdPartie, (thirdPartie) => thirdPartie.accidents)
  thirdParties: ThirdPartie[];
}
