import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
  } from "typeorm";
  
  @Entity("Consecutive")
  export class Consecutive {
    @Column({ name: "ConsecutiveID" })
    @PrimaryGeneratedColumn({name: "ConsecutiveID"})
    id!: number;
  
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
