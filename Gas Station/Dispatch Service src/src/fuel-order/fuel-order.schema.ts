import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose"
import { Transform, TransformFnParams } from "class-transformer";
@Schema()
export class FuelOrder {
   
   @Prop()
   orderId: string;

   @Prop()
   fuelType: string;

   @Prop()
   qty: number;

   @Prop()
   status: string;

   
   @Prop()
   date: Date;
  
}
export const FuelOrderSchema = SchemaFactory.createForClass(FuelOrder);

function moment(date1: TransformFnParams) {
  throw new Error("Function not implemented.");
}
