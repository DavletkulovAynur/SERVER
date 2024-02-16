import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { BalanceService } from './balance.service';

@Controller('balance')
export class BalanceController {
  constructor(private readonly investmentService: BalanceService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllInvestments() {
    return 'heello world';
  }
}
