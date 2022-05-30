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
  UpdateDateColumn,
} from "typeorm";

@Entity("Notification")
export class Notification {
  @PrimaryGeneratedColumn("uuid", { name: "NotificationID" })
  id!: string;

  @ManyToOne(type => OperationNumber, operationNum => operationNum.id, {
    nullable: true,
  })
  @JoinColumn({ name: "operationNumId" })
  operationNumId!: OperationNumber;

  @ManyToOne(type => Operation, operation => operation.id, {
    nullable: true,
  })
  @JoinColumn({ name: "operationId" })
  operation!: Operation;

  @ManyToOne(type => Deviation, deviation => deviation.id, { nullable: true })
  @JoinColumn({ name: "deviationId" })
  deviationId!: Deviation;

  @Column({ name: "otCode", length: 50 })
  otCode!: string;

  @Column({ name: "StartHour", nullable: true })
  startHour!: Date;

  @Column({ name: "EndHour", nullable: true })
  endHour!: Date;

  @Column({ name: "IsDone" })
  isDone!: boolean;

  @Column({ name: "NumPeople", nullable: true })
  numPeople!: number;

  @Column({ name: "Comments", length: 255, nullable: true })
  comments!: string;
  @ManyToOne(type => User, user => user.id, { nullable: true })
  user!: User;

  @ManyToOne(type => User, user => user.id)
  userUpdate!: User;

  /* @Column({ name: "Status", default: true })
    isActive!: boolean;

    @Column({ nullable: true, name: "Created" })
    @CreateDateColumn()
    created!: Date; */
  @Column({ name: "Status", default: true })
  isActive!: boolean;
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
/* eslint-disable */
