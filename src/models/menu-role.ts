/* eslint-disable */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
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

  @Column({ name: "Status", default: true })
  isActive!: boolean;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;
}
/* eslint-disable */
