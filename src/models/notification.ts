/* eslint-disable */
import { Deviation } from "./deviation";
import { OperationNumber } from "./operation-number";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";

@Entity("Notification")
export class Notification {
  @PrimaryGeneratedColumn("uuid", { name: "NotificationID" })
  id!: string;

  @ManyToOne(type => OperationNumber, operationNum => operationNum.id, {
    nullable: false,
  })
  operationNum!: OperationNumber;

  @ManyToOne(type => Deviation, deviation => deviation.id, { nullable: false })
  deviation!: Deviation;

  @Column({ name: "OTCode", length: 50 })
  OTCode!: string;

  @Column({ name: "StartHour", nullable: true })
  startHour!: Date;

  @Column({ name: "EndHour", nullable: true })
  endHour!: Date;

  @Column({ name: "IsDone" })
  isDone!: boolean;

  @Column({ name: "Comments", length: 255, nullable: true })
  comments!: string;

  /* @Column({ name: "Status", default: true })
    isActive!: boolean;

    @Column({ nullable: true, name: "Created" })
    @CreateDateColumn()
    created!: Date; */
}
/* eslint-disable */
