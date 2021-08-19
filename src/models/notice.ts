import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
  } from "typeorm";
  
  @Entity("Notice")
  export class Notice {
    @PrimaryGeneratedColumn("uuid")
    id!: string;
    @Column({ name: "Type" })
    type!: string;
    @Column({ name: "Order" })
    order!: number;
    @Column({ name: "Ubication" })
    ubication!: string;
    @Column({ name: "Equipment" })
    equipment!: string;
    @Column({ name: "Analysis" })
    analysis!: string;
    @Column({ name: "Description" })
    description!: string;
    @Column({ name: "User" })
    user!: number;
    @Column({ name: "Priority", length: 300 })
    priority!: string;
    @Column({ name: "Status", default: true })
    isActive!: boolean;
    @CreateDateColumn()
    created!: Date;

  }


