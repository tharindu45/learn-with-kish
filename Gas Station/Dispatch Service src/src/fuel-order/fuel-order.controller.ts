import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppService } from 'src/app.service';
import { FuelOrder } from './fuel-order.schema';
import { FuelOrderService } from './fuel-order.service';

@Controller('fuelorder')
export class FuelOrderController {
  order :FuelOrder;
  constructor(private readonly fuelOrderService: FuelOrderService,private readonly appService: AppService) {}

  

  @Get()
  async getAllOrders() {
    const order = await this.fuelOrderService.getOrders();
    return order;
  }
  @Get(':id')
  getOrderDetail(@Param('id') orderId: string) {
    return this.fuelOrderService.getOrderDetail(orderId);
  }

  @Get('/today/:date')
  getOrderDetailById(@Param('date') date: Date) {
   
    return this.fuelOrderService.getOrderDetailByDate(date)
  }

  @Patch(':id')
    async updateProduct(
      @Param('id') orderId: string,
    ) {
      
      this.order = await this.fuelOrderService.updateOrder(orderId);
      this.order.date;
      const responce=this.appService.scheduleResponse(this.order)
      return this.order.date;
    }
  
    @Delete(':id')
    async removeProduct(@Param('id') orderId: string) {
        await this.fuelOrderService.deleteProduct(orderId);
        return "deleted";
    }
}
