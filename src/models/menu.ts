import { Role } from '../models'; 
import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    ManyToOne, 
    ManyToMany, 
    JoinTable, 
    OneToMany 
  } from "typeorm"; 
import { MenuRole } from '../models'; 
   
  @Entity("Menu") 
  export class Menu { 
    @Column({ name: "MenuID" }) 
    @PrimaryGeneratedColumn("uuid") 
    id!: string; 
   
    @Column({ name: "Name" }) 
    name!: string; 
 
    @Column({ name: "URL" }) 
    URL!: string; 
 
    @OneToMany(type => MenuRole, menuRole => menuRole.menu) 
    roles!: MenuRole[] 
   
    @Column({ name: "Status", default: true }) 
    isActive!: boolean; 
 
    @Column({ nullable: true, name: "Created" }) 
    @CreateDateColumn() 
    created!: Date; 
  }