import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'
import { Recipe } from './Recipe'

@Entity()
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(() => Recipe, (recipes) => recipes.category)
  recipe: Recipe[]
}