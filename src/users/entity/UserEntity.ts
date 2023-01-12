import { 
  BaseEntity,
  BeforeInsert,
  Column, 
  CreateDateColumn, 
  DeleteDateColumn, 
  Entity, 
  PrimaryGeneratedColumn,
  UpdateDateColumn, 
 } from "typeorm";

import { hashSync } from 'bcrypt'

@Entity()
export class UserEntity extends BaseEntity{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column()
  birthDate: Date;
  
  @Column()
  email: string;
  
  @Column()
  userName: string;
  
  @Column()
  password: string;
  
  @Column()
  photo: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
