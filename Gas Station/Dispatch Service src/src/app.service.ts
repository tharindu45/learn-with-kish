import { OrderEvent } from 'src/model/orderEvent';
import { Body, Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';
import { FuelOrder } from './fuel-order/fuel-order.schema';

@Injectable()
export class AppService {

  constructor(private readonly ProducerService :ProducerService){
  
  }
   async getHello() {

    await  this.ProducerService.produce({
      topic :'test-kafka',
      messages: [
        { key: 'orderId', value: '55555222' },
        { key: 'fuelType', value: '92 octaine' },
        { key: 'qty', value: '500' },
      ]
    })
    return 'Hello World!';
  }

  async scheduleResponse(event:FuelOrder){
    
    
    
    await this.ProducerService.produce({
        topic:'update_order_',
        messages: [
          {value: JSON.stringify(event)},]
          
         
    });
    console.log("work");

    
   return event;
    
}
}

  

