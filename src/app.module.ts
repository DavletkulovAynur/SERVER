import { Module } from '@nestjs/common';
import { ConfigModule } from './config.module';
import { TypeOrmModule } from './db/typeorm.module';
import { BalanceModule } from './entities/balance/balance.module';

@Module({
  imports: [BalanceModule, ConfigModule, TypeOrmModule],
})
export class AppModule {}
