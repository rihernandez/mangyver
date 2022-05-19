/* eslint-disable */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from "typeorm";

@Entity("Session")
export class Session {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ nullable: true, name: "Token" })
  token!: string;

  @Column({ nullable: true, name: "UserId" })
  user!: string;

  @Column({ nullable: true, name: "IpAddress" })
  ip!: string;

  @Column({ nullable: true, name: "MacAddress" })
  mac!: string;

  @Column({ nullable: true, name: "OperativeSystem" })
  os!: string;

  @Column({ nullable: true, name: "Device" })
  device!: string;

  @Column({ nullable: true, name: "Navigator" })
  navigator!: string;

  @Column({ nullable: true, name: "AppVersion" })
  appVersion!: string;

  @Column({ default: false, name: "Status" })
  isActive!: boolean;

  @CreateDateColumn()
  created!: Date;

  @UpdateDateColumn({ nullable: true, name: "UpdatedDate" })
  updatedDate!: Date;
}
/* eslint-disable */
