import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
  } from "typeorm";
  
  @Entity("TypeFail")
  export class TypeFail {
    @Column({ name: "AreaID" })
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
