import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinTable,
  } from 'typeorm'
  
  import { Users } from './Users'
  
  import { Category } from './Category'
  
  @Entity()
  export class Recipe {
    @PrimaryGeneratedColumn('uuid')
    id: string
  
    @Column()
    name: string
  
    @Column()
    description: string
  
    @Column()
    ingredients: string
  
    @ManyToOne(() => Category, (category: Category) => category.recipe, {
      eager: true,
      cascade: true,
    })
    @JoinTable()
    category: Category
  
    @ManyToOne(() => Users, (users: Users) => users.recipe)
    @JoinTable()
    author: Users
  }