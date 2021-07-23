import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToMany,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity("Zone")
  export class Zone {
    @Column({ name: "ZoneID" })
    @PrimaryGeneratedColumn("uuid")
    id!: number;
  
    @Column({ name: "Name", length: 300 })
    name!: string;
  
    @Column({ name: "Code" })
    code!: string;
  
    @Column({ name: "Status", default: true })
    isActive!: boolean;
  
    @Column({ nullable: true, name: "Created" })
    @CreateDateColumn()
    createdAt!: Date;
  }


