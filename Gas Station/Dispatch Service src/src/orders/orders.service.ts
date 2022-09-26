import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order } from './order.model';

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel('Order') private readonly orderModel: Model<Order>,
      ) {}

      async insertOrder(fuelType: string, qty: number, status:string ) {
        const newProduct = new this.orderModel({
          fuelType,
          qty,
          status,
          
        });
        const result = await newProduct.save();
        return result.id as string;
      }
}
