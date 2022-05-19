/* eslint-disable */
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

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
/* eslint-disable */
