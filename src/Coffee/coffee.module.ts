/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CoffeeSchema } from "./coffee.model";
import { CoffeeController } from "./coffee.controller";
import { CoffeeServices } from "./coffee.service";

@Module({
    imports: [MongooseModule.forFeature([{name: 'Coffee', schema: CoffeeSchema}])],
    controllers: [CoffeeController],
    providers: [CoffeeServices]
})

export class CoffeeModule {}