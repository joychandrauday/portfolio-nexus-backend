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
exports.categoryController = void 0;
const category_service_1 = require("./category.service");
class CategoryController {
    // 1. Create a category
    createCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, slug, image, description, parentCategory } = req.body;
                const category = yield category_service_1.categoryService.createCategory({ name, slug, image, description, parentCategory });
                return res.status(201).json({ message: 'Category created successfully', category });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Failed to create category' });
            }
        });
    }
    // 2. Get all categories
    getAllCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const categories = yield category_service_1.categoryService.getAllCategories();
                return res.status(200).json(categories);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Failed to fetch categories' });
            }
        });
    }
    // 3. Get a single category by ID
    getCategoryById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const category = yield category_service_1.categoryService.getCategoryById(req.params.id);
                if (!category) {
                    return res.status(404).json({ error: 'Category not found' });
                }
                return res.status(200).json(category);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Failed to fetch category' });
            }
        });
    }
    // 4. Update a category by ID
    updateCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updatedCategory = yield category_service_1.categoryService.updateCategory(req.params.id, req.body);
                if (!updatedCategory) {
                    return res.status(404).json({ error: 'Category not found' });
                }
                return res.status(200).json({ message: 'Category updated successfully', updatedCategory });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Failed to update category' });
            }
        });
    }
    // 5. Delete a category by ID
    deleteCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deletedCategory = yield category_service_1.categoryService.deleteCategory(req.params.id);
                if (!deletedCategory) {
                    return res.status(404).json({ error: 'Category not found' });
                }
                return res.status(200).json({ message: 'Category deleted successfully' });
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Failed to delete category' });
            }
        });
    }
    // 6. Search categories by name
    searchCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { query } = req.query;
                const categories = yield category_service_1.categoryService.searchCategories(query);
                return res.status(200).json(categories);
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Failed to search categories' });
            }
        });
    }
}
exports.categoryController = new CategoryController();
