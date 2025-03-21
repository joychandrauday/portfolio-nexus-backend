import { model, Schema, Types } from 'mongoose';
import { IBlog } from './blog.interface';

const blogSchema = new Schema<IBlog>(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    isPublished: { type: Boolean, default: true },
    featuredImage: {
      type: String,
      default: 'https://designshack.net/wp-content/uploads/placeholder-image.png'
    },
    category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    tags: [{ type: String }],
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    hearts: { type: Number, default: 0 },
    comments: [
      {
        user: { type: Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now }
      }
    ],
    estimatedReadTime: { type: Number, required: true },
    metaDescription: { type: String, maxlength: 160 },
  },
  {
    timestamps: true,
  }
);

export const blogModel = model<IBlog>('Blog', blogSchema);
