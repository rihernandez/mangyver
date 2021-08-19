import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
  } from "typeorm";
  
  @Entity("Area")
  export class Area {
    @Column({ name: "AreaID" })
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @Column({ name: "Name", length: 300 })
    name!: string;
  
    @Column({ name: "Code" })
    code!: string;
  
    @Column({ name: "Status", default: true })
    isActive!: boolean;

    @Column({ nullable: true, name: "Created" })
    @CreateDateColumn()
    created!: Date;
  }


