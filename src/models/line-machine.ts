import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne
  } from "typeorm";
import { Line } from "./line";
  
  @Entity("LineMachine")
  export class LineMachine {
    @Column({ name: "MachineID" })
    @PrimaryGeneratedColumn()
    machineId!: number;

    @ManyToOne(() => Line, line => line.lineId)
    lineID!: Line;
  
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
