/* eslint-disable */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from "typeorm";

@Entity("ProcessType")
export class ProcessType {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "Name", length: 300 })
  name!: string;

  @Column({ name: "Status", default: true })
  isActive!: boolean;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;
}
/* eslint-disable */
