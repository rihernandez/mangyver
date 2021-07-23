import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne
  } from "typeorm";
import { Subarea } from "./subarea";
  
  @Entity("Ubication")
  export class Ubication {
    @Column({ name: "UbicationID" })
    @PrimaryGeneratedColumn("uuid")
    id!: number;
  
    @Column({ name: "Name", length: 300 })
    name!: string;
  
    @Column({ name: "Code" })
    code!: string;

    @ManyToOne((type) => Subarea, (subarea) => subarea.id)
    subarea!: Subarea;
  
    @Column({ name: "Status", default: true })
    isActive!: boolean;

    @Column({ nullable: true, name: "Created" })
    @CreateDateColumn()
    createdAt!: Date;
  }


