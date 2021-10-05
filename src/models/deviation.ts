import { Operation } from './operation';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne
  } from "typeorm";

  @Entity("Deviation")
  export class Deviation {
    @PrimaryGeneratedColumn("uuid",{name: "DeviationID" })
    id!: string;
  
    @Column({ name: "Name", length: 300 })
    name!: string;

    @ManyToOne(type => Operation, operation => operation.id, { nullable: false })
    operation!: Operation;
  
    @Column({ name: "Status", default: true })
    isActive!: boolean;

    @Column({ nullable: true, name: "Created" })
    @CreateDateColumn()
    created!: Date;

  }