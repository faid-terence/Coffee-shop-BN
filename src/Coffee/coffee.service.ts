/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './coffee.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { throwError } from 'rxjs';

@Injectable()
export class CoffeeServices {
  private coffee: Coffee[] = [];

  constructor(
    @InjectModel('Coffee') private readonly coffeeModel: Model<Coffee>,
  ) {}

  async addCoffee(
    name: string,
    description: string,
    category: string,
    price: number,
  ) {
    const newCoffee = new this.coffeeModel({
      name,
      description,
      category,
      price,
    });
    const result = await newCoffee.save();
    return result;
  }

  async getCoffee() {
    const coffee = await this.coffeeModel.find().exec();
    return coffee as Coffee[];
  }

  async getSingleCoffee(coffeeid: string) {
    const coffee = await this.findCoffee(coffeeid);
    return coffee;
  }

  private async findCoffee(id: string): Promise<Coffee> {
    let coffee;
    try {
      coffee = await this.coffeeModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Coffee not Found.');
    }

    if (!coffee) {
      throw new NotFoundException('Coffee not Found.');
    }
    return coffee;
  }

  async updateCoffee(
    coffeeId: string,
    name: string,
    description: string,
    category: string,
    price: number,
  ) {
    const updateCoffee = await this.findCoffee(coffeeId);

    if (name) {
      updateCoffee.name = name;
    }
    if (description) {
      updateCoffee.description = description;
    }
    if (category) {
      updateCoffee.category = category;
    }
    if (price) {
      updateCoffee.price = price;
    }
    updateCoffee.save();
    return updateCoffee;
  }

  async deleteCoffee(coffeeId: string) {
    const coffee = await this.coffeeModel.findByIdAndDelete(coffeeId);
    if (!coffee) {
      throw new NotFoundException('Coffee not Found');
    }
    return "Coffee Removed Successfully!"
  }
}
