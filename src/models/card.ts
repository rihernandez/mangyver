import { Operation } from './operation';
import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne
  } from "typeorm";
  
  @Entity("Card")
  export class Card {
    @Column({ name: "CardId" })
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @Column({ name: "Name" })
    name!: string;

    @ManyToOne(type => Operation, operation => operation.id)
    operation!: Operation;
  
    @Column({ name: "Status", default: true })
    isActive!: boolean;

    @Column({ nullable: true, name: "Created" })
    @CreateDateColumn()
    created!: Date;
  }
