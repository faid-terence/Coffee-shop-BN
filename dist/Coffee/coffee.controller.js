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
exports.CoffeeController = void 0;
const common_1 = require("@nestjs/common");
const coffee_service_1 = require("./coffee.service");
let CoffeeController = exports.CoffeeController = class CoffeeController {
    constructor(coffeeService) {
        this.coffeeService = coffeeService;
    }
    CreateCoffee(coffeeName, coffeeDesc, coffeeCat, coffeePrice) {
        return this.coffeeService.addCoffee(coffeeName, coffeeDesc, coffeeCat, coffeePrice);
    }
    async getAvailableCoffee() {
        const coffeee = await this.coffeeService.getCoffee();
        return coffeee;
    }
    async getCoffeeById(coffeeId) {
        const coffee = await this.coffeeService.getSingleCoffee(coffeeId);
        return coffee;
    }
    async updateCoffee(coffeeId, coffeeName, coffeeDesc, coffeeCat, coffePrice) {
        const coffee = await this.coffeeService.updateCoffee(coffeeId, coffeeName, coffeeDesc, coffeeCat, coffePrice);
        return coffee;
    }
    async deleteCoffee(coffeeId, reason) {
        const response = await this.coffeeService.deleteCoffee(coffeeId);
        return `Coffee deleted due to ${reason}`;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('name')),
    __param(1, (0, common_1.Body)('description')),
    __param(2, (0, common_1.Body)('category')),
    __param(3, (0, common_1.Body)('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number]),
    __metadata("design:returntype", Object)
], CoffeeController.prototype, "CreateCoffee", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "getAvailableCoffee", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "getCoffeeById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('name')),
    __param(2, (0, common_1.Body)('description')),
    __param(3, (0, common_1.Body)('category')),
    __param(4, (0, common_1.Body)('price')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, Number]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "updateCoffee", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('reason')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], CoffeeController.prototype, "deleteCoffee", null);
exports.CoffeeController = CoffeeController = __decorate([
    (0, common_1.Controller)('coffee'),
    __metadata("design:paramtypes", [coffee_service_1.CoffeeServices])
], CoffeeController);
//# sourceMappingURL=coffee.controller.js.map