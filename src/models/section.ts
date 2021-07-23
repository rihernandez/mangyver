import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne,
    OneToMany,
    PrimaryColumn
  } from "typeorm";
import { Field } from "./field";
  
  @Entity("Section")
  export class Section {
    @Column({ name: "RoleID" })
    @PrimaryColumn()
    id!: number;

    @ManyToOne((type) => Field, (field) => field.id)
    fields!: Field;
  
    @CreateDateColumn()
    Created!: Date;

  }
 
