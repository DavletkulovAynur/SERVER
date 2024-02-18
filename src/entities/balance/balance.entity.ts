import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('balance')
export class Balance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', type: 'varchar', nullable: false })
  @IsNotEmpty({ message: 'Name cannot be empty' })
  name: string;

  @Column({
    name: 'amount',
    type: 'decimal',
    precision: 10,
    scale: 2,
    nullable: false,
  })
  @IsNotEmpty({ message: 'Amount cannot be empty' })
  amount: number;
}
