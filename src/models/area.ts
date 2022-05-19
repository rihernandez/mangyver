/* eslint-disable */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { Operation } from "./operation";
import { User } from "./user";

@Entity("Area")
export class Area {
  @Column({ name: "AreaID" })
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "Name", length: 300 })
  name!: string;

  @Column({ name: "Code" })
  code!: string;

  @Column({ name: "Status", default: true })
  isActive!: boolean;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;

  @ManyToOne(type => Operation, operation => operation.id, { nullable: true })
  operation!: Operation;

  @ManyToOne(type => User, user => user.id, { nullable: true })
  user!: User;
}
/* eslint-disable */
