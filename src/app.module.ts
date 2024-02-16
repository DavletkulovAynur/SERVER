import { Module } from '@nestjs/common';
import { InvestModule } from './entities/investment/investment.module';
import { ConfigModule } from './config.module';
import { TypeOrmModule } from './db/typeorm.module';

@Module({
  imports: [InvestModule, ConfigModule, TypeOrmModule],
})
export class AppModule {}
