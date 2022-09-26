import { Module } from '@nestjs/common';
import { FuelOrderService } from './fuel-order.service';
import { FuelOrderController } from './fuel-order.controller';

@Module({
  controllers: [FuelOrderController],
  providers: [FuelOrderService]
})
export class FuelOrderModule {}
