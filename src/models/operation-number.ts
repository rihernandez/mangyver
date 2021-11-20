/* eslint-disable */
import { Operation } from "./operation";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

@Entity("OperationNumber")
export class OperationNumber {
  @PrimaryGeneratedColumn("uuid", { name: "OperationNumberID" })
  id!: string;

  @Column({ name: "Name", length: 255 })
  name!: string;

  @ManyToOne(type => Operation, operation => operation.id, { nullable: false })
  operation!: Operation;

  @Column({ name: "Status", default: true })
  isActive!: boolean;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;
}
/* eslint-disable */
