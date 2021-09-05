import { Operation } from './operation';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne
  } from "typeorm";
import { LineMachine } from "./line-machine";
  
  @Entity("Component")
  export class Component {
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne(() => LineMachine, machine => machine.id)
    machine!: LineMachine;
  
    @Column({ name: "Name" })
    name!: string;

    @Column({ name: "SAPCode" })
    SAPCode!: string;

    @ManyToOne(type => Operation, operation => operation.id)
    operation!: Operation;
  
    @Column({ name: "Status", default: true })
    isActive!: boolean;

    @Column({ nullable: true, name: "Created" })
    @CreateDateColumn()
    created!: Date;
  }
