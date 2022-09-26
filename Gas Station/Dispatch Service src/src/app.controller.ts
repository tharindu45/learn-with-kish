import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderEvent } from './model/orderEvent';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() event :OrderEvent) {
      console.log("Hello world,I from Srilanka");
      console.log(event.qty);
      // return this.appService.scheduleResponse(event);
  }
}
