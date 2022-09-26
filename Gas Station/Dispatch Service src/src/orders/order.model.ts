import * as mongoose from 'mongoose';

export const OrderSchema = new mongoose.Schema({
  fuelType: { type: String, required: true },
  qty: { type: Number, required: true },
  description: { type: String, required: true },
  status: { type: String, required: true },
  date: { type: Date, required: true },
});

export interface Order extends mongoose.Document {
    orderId :string;
    fuelType: string;
    qty:number;
    status:string;
    date:Date;
}
