"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const coffee_model_1 = require("./coffee.model");
const coffee_controller_1 = require("./coffee.controller");
const coffee_service_1 = require("./coffee.service");
let CoffeeModule = exports.CoffeeModule = class CoffeeModule {
};
exports.CoffeeModule = CoffeeModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: 'Coffee', schema: coffee_model_1.CoffeeSchema }])],
        controllers: [coffee_controller_1.CoffeeController],
        providers: [coffee_service_1.CoffeeServices]
    })
], CoffeeModule);
//# sourceMappingURL=coffee.module.js.map