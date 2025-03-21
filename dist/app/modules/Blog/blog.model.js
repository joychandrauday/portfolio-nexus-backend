"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogModel = void 0;
const mongoose_1 = require("mongoose");
const blogSchema = new mongoose_1.Schema({
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    content: { type: String, required: true },
    author: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    isPublished: { type: Boolean, default: true },
    featuredImage: {
        type: String,
        default: 'https://designshack.net/wp-content/uploads/placeholder-image.png'
    },
    category: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Category', required: true },
    tags: [{ type: String }],
    views: { type: Number, default: 0 },
    likes: { type: Number, default: 0 },
    hearts: { type: Number, default: 0 },
    comments: [
        {
            user: { type: mongoose_1.Types.ObjectId, ref: 'User', required: true },
            content: { type: String, required: true },
            createdAt: { type: Date, default: Date.now }
        }
    ],
    estimatedReadTime: { type: Number, required: true },
    metaDescription: { type: String, maxlength: 160 },
}, {
    timestamps: true,
});
exports.blogModel = (0, mongoose_1.model)('Blog', blogSchema);
