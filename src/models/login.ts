/* eslint-disable */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from './user';

@Entity("Login")
export class Login {
  @Column({ name: "LoginID" })
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "Login" })
  login!: string;

  @Column({ name: "Password" })
  password!: string;

  @Column({ name: "Token", nullable: true })
  Token!: string;

  @Column({ nullable: true, name: "Logged" })
  @CreateDateColumn()
  Login!: Date;

  @ManyToOne(type => User, user => user.id)
  userUpdate!: User;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
/* eslint-disable */
