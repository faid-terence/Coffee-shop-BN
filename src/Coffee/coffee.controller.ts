/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { CoffeeServices } from './coffee.service';

@Controller('coffee')
export class CoffeeController {
  constructor(private readonly coffeeService: CoffeeServices) {}
  @Post()
  CreateCoffee(
    @Body('name') coffeeName: string,
    @Body('description') coffeeDesc: string,
    @Body('category') coffeeCat: string,
    @Body('price') coffeePrice: number,
  ): any {
    return this.coffeeService.addCoffee(
      coffeeName,
      coffeeDesc,
      coffeeCat,
      coffeePrice,
    );
  }
  @Get()
  async getAvailableCoffee() {
    const coffeee = await this.coffeeService.getCoffee();
    return coffeee;
  }

  @Get(':id')
  async getCoffeeById(@Param('id') coffeeId: string) {
    const coffee = await this.coffeeService.getSingleCoffee(coffeeId);
    return coffee;
  }

  @Patch(':id')
  async updateCoffee(
    @Param('id') coffeeId: string,
    @Body('name') coffeeName: string,
    @Body('description') coffeeDesc: string,
    @Body('category') coffeeCat: string,
    @Body('price') coffePrice: number,
  ) {
    const coffee = await this.coffeeService.updateCoffee(
      coffeeId,
      coffeeName,
      coffeeDesc,
      coffeeCat,
      coffePrice,
    );
    return coffee;
  }
  @Delete(':id')
  async deleteCoffee(@Param('id') coffeeId : string , @Body('reason') reason: string){
    const response = await this.coffeeService.deleteCoffee(coffeeId);
    return `Coffee deleted due to ${reason}`;
  }
}
