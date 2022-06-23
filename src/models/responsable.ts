/* eslint-disable */
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
import { Notice, Operation } from ".";

@Entity("Responsable")
export class Responsable {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "name", nullable: true })
  name!: string;

  @Column({ name: "SAPCode", nullable: true })
  SAPCode!: string;

  @Column({ name: "IsActive", default: true })
  isActive!: boolean;

  @ManyToOne(type => Operation, object => object.id, { nullable: true })
  @JoinColumn({ name: "operationId" })
  operationId!: Operation;

  @ManyToOne(type => User, user => user.id)
  userUpdate!: User;

  @Column({ nullable: true, name: "created" })
  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
/* eslint-disable */
