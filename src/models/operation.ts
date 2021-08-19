import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    OneToMany,
    UpdateDateColumn,
  } from "typeorm";
import { Bus } from "./bus";
  
  @Entity("Operation")
  export class Operation {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @Column({ name: "Name", length: 300 })
    name!: string;
  
    @ManyToOne((type) => Bus, (bus) => bus.id)
    bus!: Bus;

    @Column({ name: "Code" })
    code!: string;
  
    @Column({ name: "Status", default: true })
    isActive!: boolean;

    @Column({ nullable: true, name: "Created" })
    @CreateDateColumn()
    created!: Date;
  }


