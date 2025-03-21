"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skillModel = void 0;
const mongoose_1 = require("mongoose");
const skillSchema = new mongoose_1.Schema({
    title: { type: String, required: true, unique: true, trim: true },
    description: { type: String },
    image: { type: String },
    type: { type: String }
}, {
    timestamps: true,
});
exports.skillModel = (0, mongoose_1.model)('Skill', skillSchema);
