import { Document } from 'mongoose';
export interface IStudent extends Document{
    name: string;
    roleNumber: number;
    class: number;
    gender: string;
    marks: number;
}