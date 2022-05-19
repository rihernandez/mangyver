/* eslint-disable */
import { User } from './user';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { Field } from "./field";

@Entity("Section")
export class Section {
  @PrimaryColumn("uuid", { name: "RoleID" })
  id!: string;

  @ManyToOne(type => Field, field => field.id)
  fields!: Field;

  @ManyToOne(type => User, user => user.id)
  userUpdate!: User;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
/* eslint-disable */
