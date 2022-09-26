import { Injectable, OnModuleInit } from "@nestjs/common";
import { ConsumerService } from "./kafka/consumer.service";

import { OrderEvent } from 'src/model/orderEvent';
import { OrdersService } from "./orders/orders.service";
import { StudentService } from "./student/student.service";
import { CreateStudentDto } from "./student/dto/create-student.dto";
import { Order } from "./order";
import { IStudent } from "./student/student.interface";
import { FuelOrderService } from "./fuel-order/fuel-order.service";
import { Order1 } from "./fuel-order/fuel-order.interface";

@Injectable()
export class TestConsumer implements OnModuleInit{ 

    private orderService :OrdersService;
    createStudentDto: any;
    // private event :OrderEvent;
    constructor(private readonly consumerService :ConsumerService,private readonly fuelOrderService :FuelOrderService){}
        async onModuleInit() {
            await this.consumerService.consume({
                topics : ['test','test-kafka','scheduler_topic']},
                {
                    eachMessage :async ({topic,partition,message}) =>{
                    //    console.log(message.value.toString());

                       //console.log(message.key.toString());
                       const event: Order1 = JSON.parse(
                        message.value?.toString() || '{}',
                      );
                        
                    //   this.orderService.insertOrder(event.fuelType, event.qty, event.status);
                    //const order :OrderEvent
                    //this.studentService.getAllStudents();
                    
                    // x:event.date[0]
                     console.log(event.date)
                     this.fuelOrderService.createOrder(event);
                     
                }
               
            
            })

        }

    
}