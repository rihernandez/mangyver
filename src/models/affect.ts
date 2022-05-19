/* eslint-disable */
import { Operation } from "./operation";
import { User } from './user';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";

@Entity("Affect")
export class Affect {
  @PrimaryGeneratedColumn("uuid", { name: "AffectID" })
  id!: string;

  @Column({ name: "Name" })
  name!: string;

  @Column({ name: "SAPCode" })
  SAPCode!: string;

  @ManyToOne(type => Operation, operation => operation.id)
  operation!: Operation;

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
