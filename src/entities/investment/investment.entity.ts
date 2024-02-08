import { IsNotEmpty } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('investment')
export class Investment {
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

  @Column({ name: 'currency', type: 'varchar', nullable: false })
  @IsNotEmpty({ message: 'Currency cannot be empty' })
  currency: string;

  @Column({ name: 'description', type: 'varchar' })
  description: string;

  @Column({ name: 'startDate', type: 'date', nullable: false })
  @IsNotEmpty({ message: 'Start date cannot be empty' })
  startDate: Date;

  @Column({ name: 'endDate', type: 'date', nullable: true })
  endDate: Date;

  @Column({ name: 'riskLevel', type: 'varchar', nullable: true })
  riskLevel: string;
}
