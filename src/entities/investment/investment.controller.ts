import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  HttpCode,
  HttpStatus,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { InvestmentService } from './investment.service';

@Controller('investments')
export class InvestmentController {
  constructor(private readonly investmentService: InvestmentService) {}

  @Get('/')
  @HttpCode(HttpStatus.OK)
  async getAllInvestments() {
    return 'heello world';
  }

  // @Post('/transactions/create')
  // @HttpCode(HttpStatus.OK)
  // async createOperations(@Req() req: Request) {
  //   const { body } = req;
  //   await this.AccountantService.createOperation(body);
  // }

  // @Delete('/transactions/delete')
  // @HttpCode(HttpStatus.OK)
  // async deleteOperations(@Req() req: Request) {
  //   const { body } = req;
  //   await this.AccountantService.deleteOperation(body);
  // }

  // @Put('/transactions/edit')
  // @HttpCode(HttpStatus.OK)
  // async editOperations(@Req() req: Request) {
  //   const { body } = req;
  //   await this.AccountantService.editOperation();
  // }
}
