/* eslint-disable */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { Area } from "./area";
import { Operation } from "./operation";
import { User } from "./user";

@Entity("Line")
export class Line {
  @PrimaryGeneratedColumn("uuid", { name: "LineID" })
  id!: string;

  @ManyToOne(() => Area, area => area.id)
  area!: Area;

  @Column({ name: "Name" })
  name!: string;

  @Column({ name: "SAPCode" })
  SAPCode!: string;

  @ManyToOne(type => User, user => user.id)
  userUpdate!: User;

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
