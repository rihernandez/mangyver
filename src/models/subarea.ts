/* eslint-disable */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Area } from "./area";

@Entity("SubArea")
export class Subarea {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "Name", length: 300 })
  name!: string;

  @Column({ name: "Code" })
  code!: string;

  @Column({ name: "SAPCode" })
  SAPCode!: string;

  @Column({ name: "Status", default: true })
  isActive!: boolean;

  @ManyToOne(type => Area, area => area.id)
  area!: Area;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;
}
/* eslint-disable */
