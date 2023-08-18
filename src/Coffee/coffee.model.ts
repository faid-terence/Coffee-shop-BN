/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as mongoose from 'mongoose';
export const CoffeeSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true },
});

export interface Coffee extends mongoose.Document{
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
}
