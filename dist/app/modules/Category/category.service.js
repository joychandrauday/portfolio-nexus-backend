"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryService = void 0;
// category.service.ts
const category_model_1 = require("./category.model");
class CategoryService {
    // Create a new category
    createCategory(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const newCategory = new category_model_1.categoryModel(data);
            return yield newCategory.save();
        });
    }
    // Get all categories
    getAllCategories() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_model_1.categoryModel.find().populate('parentCategory', 'name');
        });
    }
    // Get a single category by ID
    getCategoryById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_model_1.categoryModel.findById(id).populate('parentCategory', 'name');
        });
    }
    // Update a category by ID
    updateCategory(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_model_1.categoryModel.findByIdAndUpdate(id, data, { new: true });
        });
    }
    // Delete a category by ID
    deleteCategory(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_model_1.categoryModel.findByIdAndDelete(id);
        });
    }
    // Search categories by name
    searchCategories(query) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield category_model_1.categoryModel.find({ name: { $regex: query, $options: 'i' } });
        });
    }
}
exports.categoryService = new CategoryService();
