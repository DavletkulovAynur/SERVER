import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Balance } from './balance.entity';

@Injectable()
export class BalanceService {
  constructor(
    @InjectRepository(Balance)
    private readonly BalanceRepository: Repository<Balance>,
  ) {}

  // public async createOperation(newOperation) {
  //   return await this.investmentRepository.save(newOperation);
  // }
}
