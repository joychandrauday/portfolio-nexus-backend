// 3. Router
import express, { Handler } from 'express'
import { categoryController } from './category.controller';
const router = express.Router()


// 1. Create a category
router.post('/', categoryController.createCategory as unknown as Handler);

// 2. Get all categories
router.get('/', categoryController.getAllCategories as unknown as Handler);

// 3. Get a single category by ID
router.get('/:id', categoryController.getCategoryById as unknown as Handler);

// 4. Update a category by ID
router.put('/:id', categoryController.updateCategory as unknown as Handler);

// 5. Delete a category by ID
router.delete('/:id', categoryController.deleteCategory as unknown as Handler);

// 6. Search categories by name
router.get('/search', categoryController.searchCategories as unknown as Handler);


export const categoryRoutes = router
