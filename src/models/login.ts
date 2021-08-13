import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn
  } from "typeorm";
  
  @Entity("Login")
  export class Login {
    @Column({ name: "LoginID" })
    @PrimaryGeneratedColumn("uuid")
    id!: number;
  
    @Column({ name: "Login" })
    login!: string;

    @Column({ name: "Password" })
    password!: string;
  
    @Column({ name: "Token" , nullable: true})
    Token!: string;
  
    @Column({ nullable: true, name: "Logged" })
    @CreateDateColumn()
    Login!: Date;
  }

