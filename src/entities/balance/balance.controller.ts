import { Controller, Get, HttpCode, HttpStatus, Res } from '@nestjs/common';
import { BalanceService } from './balance.service';
import { Response } from 'express'; // Make sure to import Response from 'express'

@Controller('balance')
export class BalanceController {
  constructor(private readonly investmentService: BalanceService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllInvestments(@Res() res: Response) {
    const data = { message: 'hello world' };
    return res.json(data);
  }
}
