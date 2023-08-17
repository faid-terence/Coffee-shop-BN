"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeSchema = void 0;
const mongoose = require("mongoose");
exports.CoffeeSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
});
//# sourceMappingURL=coffee.model.js.map