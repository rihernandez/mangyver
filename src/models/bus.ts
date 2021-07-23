import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";

import { Zone } from "./zone";

@Entity("Bus")
export class Bus {
  @Column({ name: "BusID" })
  @PrimaryGeneratedColumn("uuid")
  id!: number;

  //   @Column({ name: "ZoneID", nullable: false })
  //   zone!: string;

  @ManyToOne((type) => Zone, (zone) => zone.id)
  zone!: Zone;

  @Column({ name: "Name", nullable: false })
  name!: string;

  @Column({ name: "Code", nullable: false })
  code!: string;

  @Column({ name: "Status", default: false })
  isActive!: boolean;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  createdAt!: Date;
}
