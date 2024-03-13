import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contact } from "./contact.entitie";
import { getRounds, hashSync } from "bcryptjs";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullname: string;
  @Column({ unique: true })
  email: string;
  @Column()
  password: string;
  @Column()
  phone: string;
  @CreateDateColumn({ type: "date" })
  date: Date;
  @DeleteDateColumn({ type: "date" })
  deletedAt: Date | null
  @OneToMany(() => Contact, (contact) => contact.user)
  contacts: Contact[];

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    const isHash = getRounds(this.password);
    if (!isHash) {
      this.password = hashSync(this.password, 10);
    }
  }
}

export { User };
