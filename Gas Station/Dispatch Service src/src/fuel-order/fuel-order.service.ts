import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { endOfDay } from 'date-fns';
import startOfDay from 'date-fns/startOfDay';
import { Model } from 'mongoose';
import { ProducerService } from 'src/kafka/producer.service';
import { OrderEvent } from 'src/model/orderEvent';
import { UpdateEvent } from 'src/model/updateEvent';
import { CreateFuelOrderDto } from './dto/create-fuel-order.dto';
import { UpdateFuelOrderDto } from './dto/update-fuel-order.dto';
import { Order1 } from './fuel-order.interface';
import { FuelOrder } from './fuel-order.schema';
// import {startOfDay} from 'date-fns/startOfDay'

@Injectable()
export class FuelOrderService {

 

  constructor(@InjectModel('FuelOrder') private orderModel:Model<Order1> ) { }
  async createOrder(order: Order1) {
   const newStudent = await new this.orderModel(order);
   return newStudent.save();
}

async getOrders() {
  const products = await this.orderModel.find().exec();
  return products.map(prod => ({
    orderId:prod.orderId,
    fuelType: prod.fuelType,
    qty: prod.qty,
    status: prod.status,
    date:prod.date,
  }));
}

async getOrderDetail(orderId: string) {
  const product = await this.findOrder(orderId);
  return {
    orderId:product.orderId,
    fuelType: product.fuelType,
    qty: product.qty,
    status: product.status,
    date: product.date,
    
  };
}



// Find By Date



async getOrderDetailByDate(date: Date) {
  const product = await this.findOrderByDate(date);
  return {
    orderId:product.orderId,
    fuelType: product.fuelType,
    qty: product.qty,
    status: product.status,
    date: product.date,
    
  };
}

private async findOrderByDate(date: Date): Promise<Order1> {
  let product;
  let order1:FuelOrder;
  
  let date1=new Date().getDate();
  // let date1=new Date(date.getFullYear(),date.getMonth(),date.getDay());
  try {
    product = await this.orderModel.findOne({'$where':'fuelType.toString().slice(0,10)=="2022-09-15"'});
  } catch (error) {
    throw new NotFoundException('Could not find product.');
  }
  if (!product) {
    throw new NotFoundException('Cou not find product.');
  }
  return product;
}

async updateOrder(orderId:string){

   event1 :UpdateEvent;

  const updatedOrder = await this.findOrder(orderId);
  updatedOrder.status = "Order Delivered";
  updatedOrder.save();

  return updatedOrder;
}


private async findOrder(id: string): Promise<Order1> {
  let product;
  let order1:FuelOrder;
  try {
    product = await this.orderModel.findOne({'orderId':id}).exec();
  } catch (error) {
    throw new NotFoundException('Could not find product.');
  }
  if (!product) {
    throw new NotFoundException('Could not find product.');
  }
  return product;
}

  async deleteProduct(Id: string) {
    const result = await this.orderModel.deleteOne({orderId: Id}).exec();
    
  }




// async getOrderDetail(productId: string) {
//   const product = await this.findProduct(productId);
//   return {
   
//     fuelType: product.fuelType,
//     // description: product.description,
//     // price: product.price,
//   };
// }

// private async findProduct(id: string): Promise<Order1> {
//   let product;
//   try {
//     product = await this.orderModel.findById(id).exec();
//   } catch (error) {
//     throw new NotFoundException('Could not find product.');
//   }
//   if (!product) {
//     throw new NotFoundException('Could not find product.');
//   }
//   return product;
// }
}


