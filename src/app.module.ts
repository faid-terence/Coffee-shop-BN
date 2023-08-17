/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CoffeeModule } from './Coffee/coffee.module';

@Module({
  imports: [
    CoffeeModule,
    MongooseModule.forRoot(
      'mongodb+srv://terencefaid:thestunna420@cluster0.bdhur1p.mongodb.net/CoffeeShop?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
