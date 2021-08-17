import { name } from "faker";
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    JoinColumn
  } from "typeorm";
import { Line } from "./line";
  
  @Entity("LineMachine")
  export class LineMachine {
    @Column({ name: "MachineID" })
    @PrimaryGeneratedColumn()
    id!: number;

    // @ManyToOne(() => Line, line => line.lineId)
    // @JoinTable({
    //   name: "LineID"
    // })
    // lineID!: Line;

    // @ManyToOne(type => Line, {cascadeAll: true })
    // @JoinColumn({ name: "LineID" })
    // LineID: Line;

    @Column({ name: "LineID" })
    Line!: number;

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
