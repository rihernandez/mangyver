/* eslint-disable */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
import { User } from './user';
import { Bus } from "./bus";

@Entity("Operation")
export class Operation {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "Name", length: 300 })
  name!: string;

  @ManyToOne(type => Bus, bus => bus.id)
  bus!: Bus;

  @Column({ name: "Code" })
  code!: string;

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
