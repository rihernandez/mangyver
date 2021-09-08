import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    ManyToOne 
  } from "typeorm"; 
import { Area } from "./area"; 
import { Subarea } from "./subarea"; 
   
  @Entity("SubAreaMachines") 
  export class SubAreaMachine { 
    @PrimaryGeneratedColumn("uuid") 
    id!: string; 
   
    @Column({ name: "Name", length: 300 }) 
    name!: string; 
   
    @Column({ name: "SAPCode" }) 
    SAPCode!: string; 
   
    @ManyToOne((type) => Subarea, (subarea) => subarea.id) 
    subArea!: Subarea; 
 
    @Column({ name: "Status", default: true }) 
    isActive!: boolean; 
 
    @Column({ nullable: true, name: "Created" }) 
    @CreateDateColumn() 
    created!: Date; 
  }