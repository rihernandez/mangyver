import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
  } from "typeorm";
import { Notice } from ".";
  
  
  @Entity("SapLog")
  export class SapLog {
    @Column({ name: "SapLogId" })
    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @ManyToOne((type) => Notice, (notice) => notice.id)
    notice!: Notice;

    @Column({ name: "SAPnoticeId", nullable: true })
    SAPnoticeId!:string;

    @Column({ name: "statusResult", nullable: true })
    statusResult!:string;

    @Column({ name: "errorCode", nullable: true })
    errorCode!:string;

    @Column({ name: "username", nullable: true })
    username!: string;

    @Column({ nullable: true, name: "Created" })
    @CreateDateColumn()
    created!: Date;


  }
  