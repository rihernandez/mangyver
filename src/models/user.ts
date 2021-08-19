import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne
} from "typeorm";
import * as bcrypt from "bcryptjs";

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

  // @ManyToOne((type) => Role, (role) => role.role)
  // role!: Role;

  @Column({ name: "Role" })
  role! : string

  @Column({ default: false, name: "Status" })
  isActive!: boolean;

  @CreateDateColumn()
  created!: Date;

  hashPassword() {
    this.password = bcrypt.hashSync(this.password, 8);
  }
  checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
    return bcrypt.compareSync(unencryptedPassword, this.password);
  }
}
