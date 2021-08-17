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
    @PrimaryGeneratedColumn()
    componentId!: number;

    @ManyToOne(() => LineMachine, machine => machine.machineId)
    machineId!: LineMachine;
  
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
