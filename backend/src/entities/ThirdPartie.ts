import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Accident } from "./Accident";

@Entity('thirdParties')
export class ThirdPartie {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: "text" })
  name: string

  @Column({ type: "text" })
  identification: string

  @ManyToMany(() => Accident, accidents => accidents.thirdParties)
  accidents: Accident[];
}