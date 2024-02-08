import { Module } from '@nestjs/common';
import { InvestModule } from './entities/investment/investment.module';

@Module({
  imports: [InvestModule],
})
export class AppModule {}
