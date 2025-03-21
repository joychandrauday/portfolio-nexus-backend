// category.controller.ts
import { Request, Response } from 'express';
import { categoryService } from './category.service';

class CategoryController {
  // 1. Create a category
  async createCategory(req: Request, res: Response) {
    try {
      const { name, slug, image, description, parentCategory } = req.body;
      const category = await categoryService.createCategory({ name, slug, image, description, parentCategory });
      return res.status(201).json({ message: 'Category created successfully', category });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to create category' });
    }
  }

  // 2. Get all categories
  async getAllCategories(req: Request, res: Response) {
    try {
      const categories = await categoryService.getAllCategories();
      return res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch categories' });
    }
  }

  // 3. Get a single category by ID
  async getCategoryById(req: Request, res: Response) {
    try {
      const category = await categoryService.getCategoryById(req.params.id);
      if (!category) {
        return res.status(404).json({ error: 'Category not found' });
      }
      return res.status(200).json(category);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to fetch category' });
    }
  }

  // 4. Update a category by ID
  async updateCategory(req: Request, res: Response) {
    try {
      const updatedCategory = await categoryService.updateCategory(req.params.id, req.body);
      if (!updatedCategory) {
        return res.status(404).json({ error: 'Category not found' });
      }
      return res.status(200).json({ message: 'Category updated successfully', updatedCategory });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to update category' });
    }
  }

  // 5. Delete a category by ID
  async deleteCategory(req: Request, res: Response) {
    try {
      const deletedCategory = await categoryService.deleteCategory(req.params.id);
      if (!deletedCategory) {
        return res.status(404).json({ error: 'Category not found' });
      }
      return res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to delete category' });
    }
  }

  // 6. Search categories by name
  async searchCategories(req: Request, res: Response) {
    try {
      const { query } = req.query;
      const categories = await categoryService.searchCategories(query as string);
      return res.status(200).json(categories);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Failed to search categories' });
    }
  }
}

export const categoryController = new CategoryController();
