import {
  Column,
  Entity,
  JoinColumn, ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { Accident } from "./Accident";

@Entity("thirdParties")
export class ThirdPartie {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  identification: string;

  @Column()
  accident_id: string;

  @ManyToOne(() => Accident, (accidents) => accidents.thirdParties)
  @JoinColumn({ name: "accident_id" })
  accidents: Accident;
}
