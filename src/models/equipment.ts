/* eslint-disable */
import { User } from './user';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { Area } from "./area";

@Entity("Equipment")
export class Equipment {
  @Column({ name: "EquipmentID" })
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "Name", length: 300 })
  name!: string;

  @Column({ name: "Code" })
  code!: string;

  @Column({ name: "Status", default: true })
  isActive!: boolean;

  @ManyToOne(() => Area, area => area.id)
  area!: Area;

  @ManyToOne(type => User, user => user.id)
  userUpdate!: User;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
/* eslint-disable */
