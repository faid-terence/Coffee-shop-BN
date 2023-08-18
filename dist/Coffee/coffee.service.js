"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeServices = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CoffeeServices = exports.CoffeeServices = class CoffeeServices {
    constructor(coffeeModel) {
        this.coffeeModel = coffeeModel;
        this.coffee = [];
    }
    async addCoffee(name, description, category, price) {
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
        return coffee;
    }
    async getSingleCoffee(coffeeid) {
        const coffee = await this.findCoffee(coffeeid);
        return coffee;
    }
    async findCoffee(id) {
        let coffee;
        try {
            coffee = await this.coffeeModel.findById(id);
        }
        catch (error) {
            throw new common_1.NotFoundException('Coffee not Found.');
        }
        if (!coffee) {
            throw new common_1.NotFoundException('Coffee not Found.');
        }
        return coffee;
    }
    async updateCoffee(coffeeId, name, description, category, price) {
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
    async deleteCoffee(coffeeId) {
        const coffee = await this.coffeeModel.findByIdAndDelete(coffeeId);
        if (!coffee) {
            throw new common_1.NotFoundException('Coffee not Found');
        }
        return "Coffee Removed Successfully!";
    }
};
exports.CoffeeServices = CoffeeServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Coffee')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CoffeeServices);
//# sourceMappingURL=coffee.service.js.map