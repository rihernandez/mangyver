/* eslint-disable */
import { Operation } from "./operation";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Process } from "./process";

@Entity("Card")
export class Card {
  @Column({ name: "CardId" })
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "Name" })
  name!: string;

  @ManyToOne(type => Operation, operation => operation.id)
  operation!: Operation;

  @ManyToOne(type => Process, process => process.processId)
  @JoinColumn({ name: "processId" })
  process!: Process;

  @Column({ name: "Status", default: true })
  isActive!: boolean;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;
}
/* eslint-disable */
