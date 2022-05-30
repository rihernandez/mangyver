/* eslint-disable */
import { User } from './user';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  OneToMany,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import * as bcrypt from "bcryptjs";

@Entity("Role")
export class Role {
  @PrimaryGeneratedColumn("uuid", { name: "RoleID" })
  id!: string;

  @Column({ nullable: false, name: "Name" })
  name!: string;

  @ManyToOne(type => User, user => user.id)
  userUpdate!: User;

  /* @Column({ name: "Description" })
    description!: string; */

  @Column({ default: false, name: "Status" })
  isActive!: boolean;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
/* eslint-disable */
