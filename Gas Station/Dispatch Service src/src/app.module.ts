import { Module } from '@nestjs/common';
import { TestScheduler } from 'rxjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { TestConsumer } from './test.consumer';
import { MongooseModule } from '@nestjs/mongoose';

import { OrdersModule } from './orders/orders.module';
import { StudentModule } from './student/student.module';
import { StudentSchema } from './student/student.schema';
import { StudentService } from './student/student.service';
import { OrdersService } from './orders/orders.service';
import { FuelOrderModule } from './fuel-order/fuel-order.module';
import { FuelOrderSchema } from './fuel-order/fuel-order.schema';
import { FuelOrderService } from './fuel-order/fuel-order.service';
import { FuelOrderController } from './fuel-order/fuel-order.controller';



@Module({
  imports: [KafkaModule,MongooseModule.forRoot('mongodb+srv://tharindu45:WFplOX5csSmpcLyr@cluster0.sx4ctj2.mongodb.net/vvvc?retryWrites=true&w=majority'), 
  MongooseModule.forFeature([{ name: 'Student', schema: StudentSchema }]),  MongooseModule.forFeature([{ name: 'FuelOrder', schema: FuelOrderSchema }]), ],
  controllers: [AppController,FuelOrderController],
  providers: [AppService,TestConsumer,StudentService,FuelOrderService],
})
export class AppModule {}



