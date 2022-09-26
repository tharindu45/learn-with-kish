import { Document } from 'mongoose';
export interface Order1 extends Document{
    
    orderId: string;
    fuelType: string;
    qty: number;
    status: string;
    date: Date;
}