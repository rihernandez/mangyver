import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne
  } from "typeorm";
import { Area } from "./area";
  
  @Entity("Line")
  export class Line {
    @Column({ name: "LineaId" })
    @PrimaryGeneratedColumn()
    lineId!: number;
  
    @ManyToOne(() => Area, area => area.id)
    areaId!: Area;
  
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

