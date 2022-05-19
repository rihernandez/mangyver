/* eslint-disable */
import { User } from './user';
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
  id!: string;

  //   @Column({ name: "ZoneID", nullable: false })
  //   zone!: string;

  @ManyToOne(type => Zone, zone => zone.id)
  zone!: Zone;

  @Column({ name: "Name", nullable: false })
  name!: string;

  @Column({ name: "Code", nullable: false })
  code!: string;

  @ManyToOne(type => User, user => user.id)
  userUpdate!: User;

  @Column({ name: "Status", default: false })
  isActive!: boolean;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
/* eslint-disable */
