/* eslint-disable */
import { Deviation } from "./deviation";
import { OperationNumber } from "./operation-number";
import { User } from "./user";
import { Operation } from "./operation";

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { LineMachine } from "./line-machine";

@Entity("ObjectParts")
export class ObjectParts {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id!: string;

  @Column({ name: "name", nullable: true })
  name!: string;

  @Column({ name: "SAPCode", length: 50 })
  SAPCode!: string;

  @Column({ name: "groupCode", nullable: true })
  groupCode!: String;

  @Column({ name: "status", default: true })
  isActive!: boolean;

  @CreateDateColumn()
  created!: Date;

  //   @ManyToOne(type => OperationNumber, operationNum => operationNum.id, {
  //     nullable: true,
  //   })
  //   @JoinColumn({ name: "operationNumId" })
  //   operationNumId!: OperationNumber;

  //   @ManyToOne(type => Operation, operation => operation.id, {
  //     nullable: true,
  //   })
  //   @JoinColumn({ name: "operationId" })
  //   operation!: Operation;

  //   @ManyToOne(type => Deviation, deviation => deviation.id, { nullable: true })
  //   @JoinColumn({ name: "deviationId" })
  //   deviationId!: Deviation;
}
