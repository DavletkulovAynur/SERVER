import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { InvestmentService } from './investment.service';

@Controller('investments')
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllInvestments() {
    return 'heello world';
  }
}
