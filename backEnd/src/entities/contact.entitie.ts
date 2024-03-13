import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entitie";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  fullname: string;
  @Column({ unique: true })
  email: string;
  @Column()
  phone: string;
  @CreateDateColumn({ type: "date" })
  date: Date;

  @ManyToOne(() => User, (user) => user.contacts )
  user: User
}
