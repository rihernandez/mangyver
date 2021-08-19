import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
  } from "typeorm";
  
  @Entity("Equipment")
  export class Equipment {
    @Column({ name: "EquipmentID" })
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


