import { model, Schema } from 'mongoose';
import { ICategory } from './category.interface';

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true, trim: true },
    description: { type: String },
    slug: { type: String, required: true, unique: true, lowercase: true },
    parentCategory: { type: Schema.Types.ObjectId, ref: 'Category' },
    image: { type: String }
  },
  {
    timestamps: true,
  }
);

export const categoryModel = model<ICategory>('Category', categorySchema);
