"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryRoutes = void 0;
// 3. Router
const express_1 = __importDefault(require("express"));
const category_controller_1 = require("./category.controller");
const router = express_1.default.Router();
// 1. Create a category
router.post('/', category_controller_1.categoryController.createCategory);
// 2. Get all categories
router.get('/', category_controller_1.categoryController.getAllCategories);
// 3. Get a single category by ID
router.get('/:id', category_controller_1.categoryController.getCategoryById);
// 4. Update a category by ID
router.put('/:id', category_controller_1.categoryController.updateCategory);
// 5. Delete a category by ID
router.delete('/:id', category_controller_1.categoryController.deleteCategory);
// 6. Search categories by name
router.get('/search', category_controller_1.categoryController.searchCategories);
exports.categoryRoutes = router;
