import { CoffeeServices } from './coffee.service';
export declare class CoffeeController {
    private readonly coffeeService;
    constructor(coffeeService: CoffeeServices);
    CreateCoffee(coffeeName: string, coffeeDesc: string, coffeeCat: string, coffeePrice: number): any;
    getAvailableCoffee(): Promise<import("./coffee.model").Coffee[]>;
    getCoffeeById(coffeeId: string): Promise<import("./coffee.model").Coffee>;
    updateCoffee(coffeeId: string, coffeeName: string, coffeeDesc: string, coffeeCat: string, coffePrice: number): Promise<import("./coffee.model").Coffee>;
    deleteCoffee(coffeeId: string, reason: string): Promise<string>;
}
