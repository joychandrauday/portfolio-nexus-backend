"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryModel = void 0;
const mongoose_1 = require("mongoose");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String },
    slug: { type: String, required: true, unique: true, lowercase: true },
    parentCategory: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Category' },
    image: { type: String }
}, {
    timestamps: true,
});
exports.categoryModel = (0, mongoose_1.model)('Category', categorySchema);
