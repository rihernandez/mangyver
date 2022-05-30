/* eslint-disable */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";
import { User } from './user';
import { Menu } from "./menu";
import { Role } from "./role";

@Entity("MenuRole")
export class MenuRole {
  @Column({ name: "MenuRoleID" })
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @ManyToOne(type => Menu, menu => menu.roles)
  menu!: Menu;

  @ManyToOne(type => Role, role => role.menus)
  role!: Role;

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
