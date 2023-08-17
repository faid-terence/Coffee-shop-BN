import * as mongoose from 'mongoose';
export declare const CoffeeSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    description: string;
    category: string;
    price: number;
}, mongoose.Document<unknown, {}, {
    name: string;
    description: string;
    category: string;
    price: number;
}> & {
    name: string;
    description: string;
    category: string;
    price: number;
} & {
    _id: mongoose.Types.ObjectId;
}>;
export interface Coffee extends mongoose.Document {
    id: string;
    name: string;
    description: string;
    category: string;
    price: number;
}
