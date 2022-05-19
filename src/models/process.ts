/* eslint-disable */
import { Operation } from "./operation";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { ProcessType } from "./process-type";

@Entity("Process")
export class Process {
  @Column({ name: "id", nullable: true })
  id!: string;

  @PrimaryGeneratedColumn("uuid")
  processId!: string;

  @ManyToOne(() => ProcessType, type => type.id)
  processType!: ProcessType;

  @Column({ name: "Name" })
  name!: string;

  @Column({ name: "SAPCode" })
  SAPCode!: string;

  @ManyToOne(type => Operation, operation => operation.id)
  operation!: Operation;

  @Column({ name: "Status", default: true })
  isActive!: boolean;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
