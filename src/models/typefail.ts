import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
  } from "typeorm";
  
  @Entity("TypeFail")
  export class TypeFail {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
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
