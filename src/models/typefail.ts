/* eslint-disable */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { Operation } from ".";

@Entity("TypeFail")
export class TypeFail {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "Name" })
  name!: string;

  @Column({ name: "SAPCode" })
  SAPCode!: string;

  @Column({ name: "Status", default: true })
  isActive!: boolean;

  @Column({ name: "ShortName", nullable: true })
  shortName!: string;

  @ManyToOne(type => Operation, operation => operation.id, { nullable: true })
  operation!: Operation;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;
}
/* eslint-disable */
