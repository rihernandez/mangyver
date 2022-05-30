/* eslint-disable */
import { Role } from "../models";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
  UpdateDateColumn,
} from "typeorm";
import { User } from './user';
import { MenuRole } from "../models";

@Entity("Menu")
export class Menu {
  @Column({ name: "MenuID" })
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "Name" })
  name!: string;

  @Column({ name: "URL" })
  URL!: string;

  @OneToMany(type => MenuRole, menuRole => menuRole.menu)
  roles!: MenuRole[];

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
