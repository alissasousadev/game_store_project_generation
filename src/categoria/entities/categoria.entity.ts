import { IsNotEmpty } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn } from 'typeorm';

@Entity({ name: 'tb_categoria' })
export class Categoria {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @Column({ length: 100, nullable: false })
  tipo: string;

  @IsNotEmpty()
  @Column({ length: 255, nullable: false })
  descricao: string;
}
