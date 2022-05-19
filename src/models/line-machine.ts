/* eslint-disable */
import { name } from "faker";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from './user';
import { Line } from "./line";

@Entity("LineMachine")
export class LineMachine {
  @Column({ name: "MachineID" })
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  // @ManyToOne(() => Line, line => line.lineId)
  // @JoinTable({
  //   name: "LineID"
  // })
  // lineID!: Line;

  // @ManyToOne(type => Line, {cascadeAll: true })
  // @JoinColumn({ name: "LineID" })
  // LineID: Line;

  @ManyToOne(() => Line, line => line.id)
  line!: Line;

  @Column({ name: "Name" })
  name!: string;

  @Column({ name: "SAPCode" })
  SAPCode!: string;

  @Column({ name: "Status", default: true })
  isActive!: boolean;

  @Column({ name: "groupCode", nullable: true })
  groupCode!: string;

  @ManyToOne(type => User, user => user.id)
  userUpdate!: User;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
