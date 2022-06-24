/* eslint-disable */
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
import { Process } from "./process";

@Entity("Card")
export class Card {
  @Column({ name: "CardId" })
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "groupCode", nullable: true })
  groupCode!: string;

  @Column({ name: "Name" })
  name!: string;

  @ManyToOne(type => Operation, operation => operation.id)
  operation!: Operation;

  @ManyToOne(type => Process, process => process.processId)
  @JoinColumn({ name: "processId" })
  process!: Process;

  @ManyToOne(type => User, user => user.id)
  userUpdate!: User;

  @Column({ name: "Status", default: true })
  isActive!: boolean;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
/* eslint-disable */
