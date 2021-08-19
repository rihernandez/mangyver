import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
  } from "typeorm";
  import * as bcrypt from "bcryptjs";
  
  @Entity("Role")
  export class Role {
    @Column("uuid",{ name: "RoleID" })
    @PrimaryGeneratedColumn()
    id!: string;
  
    @Column({ nullable: false, name: "Role" })
    role!: string;

    @Column({ name: "Description" })
    description!: string;
  
    @Column({ default: false, name: "Status" })
    isActive!: boolean;
  
    @CreateDateColumn()
    created!: Date;

  }
  