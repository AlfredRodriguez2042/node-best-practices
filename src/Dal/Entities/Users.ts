import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    BeforeInsert,
  } from 'typeorm'
  import { hashSync } from 'bcrypt'
  
  import { Recipe } from './Recipe'
  
  type UserRole = 'admin' | 'user'
  
  @Entity()
  export class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string
  
    @Column()
    name: string
  
    @Column({ unique: true })
    email: string
  
    @Column()
    password: string
  
    @Column({
      type: 'enum',
      enum: ['admin', 'user'],
      default: 'user',
    })
    role: UserRole
  
    @BeforeInsert()
    hashPassword() {
      this.password = hashSync(this.password, 12)
    }
  
    @OneToMany(() => Recipe, (recipe: Recipe) => recipe.author)
    recipe: Recipe[]
}