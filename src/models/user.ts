import { Role } from '../models';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from "typeorm";
import * as bcrypt from "bcryptjs";
import { Operation } from "./operation";
import { Area } from "./area";
import { Line } from "./line";

// enum Roles {
//   Male,
//   Female,
//   Other
// }

@Entity("User")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({ name: "Name" })
  name!: string;

  @Column({ name: "Username", unique: true })
  username!: string;

  @Column({ name: "Password" })
  password!: string;

  @Column({ type: "varchar", length: 200, unique: true, name: "Email" })
  email!: string;

  @ManyToOne((type) => Role, (role) => role.id)
  role!: Role;

  /* @Column({ name: "Role" })
  role! : string */

  @Column({ default: false, name: "Status" })
  isActive!: boolean;

  @Column({ default: "active", name: "auth" })
  auth!: string;

  @CreateDateColumn()
  created!: Date;

  @ManyToOne(type => Operation, operation => operation.id, {nullable: true})
  operation!: Operation;

  @ManyToOne(type => Area, area => area.id, {nullable: true})
  area!: Area;

  @ManyToOne(type => Line, line => line.id, {nullable: true})
  line!: Line;

  @Column({ nullable: true, name: "SAPCode" })
  SAPCode!: string;

  @Column({ nullable: true, name: "SAPUser" })
  SAPUser!: string;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
