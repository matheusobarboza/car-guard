import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Accident } from "./Accident";
import { Vehicle } from "./Vehicle";

@Entity("clients")
export class Client {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  identification: string;

  @OneToMany(() => Vehicle, (vehicle) => vehicle.client)
  vehicles: Vehicle[];

  @OneToMany(() => Accident, (accident) => accident.client)
  accidents: Accident[];
}
