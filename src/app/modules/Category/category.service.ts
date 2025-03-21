// category.service.ts
import { categoryModel } from './category.model';
import { ICategory } from './category.interface';

class CategoryService {
  // Create a new category
  async createCategory(data: ICategory) {
    const newCategory = new categoryModel(data);
    return await newCategory.save();
  }

  // Get all categories
  async getAllCategories() {
    return await categoryModel.find().populate('parentCategory', 'name');
  }

  // Get a single category by ID
  async getCategoryById(id: string) {
    return await categoryModel.findById(id).populate('parentCategory', 'name');
  }

  // Update a category by ID
  async updateCategory(id: string, data: Partial<ICategory>) {
    return await categoryModel.findByIdAndUpdate(id, data, { new: true });
  }

  // Delete a category by ID
  async deleteCategory(id: string) {
    return await categoryModel.findByIdAndDelete(id);
  }

  // Search categories by name
  async searchCategories(query: string) {
    return await categoryModel.find({ name: { $regex: query, $options: 'i' } });
  }
}

export const categoryService = new CategoryService();
