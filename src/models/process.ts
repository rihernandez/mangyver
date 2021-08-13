import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from "typeorm";
import { ProcessType } from "./process-type";

@Entity("Process")
export class Process {
  @Column({ name: "AreaID" })
  @PrimaryGeneratedColumn()
  processId!: number;

  @ManyToOne(() => ProcessType, type => type.processTypeId)
  processTypeId!: ProcessType;

  @Column({ name: "Name" })
  name!: string;

  @Column({ name: "SAPCode" })
  SAPCode!: string;

  @Column({ name: "Status", default: true })
  isActive!: boolean;

  @Column({ nullable: true, name: "Created" })
  @CreateDateColumn()
  created!: Date;
}