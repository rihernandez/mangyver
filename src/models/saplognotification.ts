/* eslint-disable */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { User } from './user';
import { Notice } from ".";

@Entity("SapLogNotification")
export class SapLogNotification {
  @Column({ name: "SapLogId" })
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "notification", nullable: true })
  notice!: string;

  @Column({ name: "SAPnotificationId", nullable: true })
  SAPnotificationId!: string;

  @Column({ name: "statusResult", nullable: true })
  statusResult!: string;

  @Column({ name: "errorCode", nullable: true })
  errorCode!: string;

  @Column({ name: "username", nullable: true })
  username!: string;

  @ManyToOne(type => User, user => user.id)
  userUpdate!: User;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
/* eslint-disable */
