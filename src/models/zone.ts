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

@Entity("Zone")
export class Zone {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "Name", length: 300 })
  name!: string;

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
