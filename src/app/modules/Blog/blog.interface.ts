import { Types } from "mongoose";

export type IBlog = {
    title: string;
    slug: string;
    content: string;
    author: Types.ObjectId;
    isPublished: boolean;
    featuredImage: string | null;
    category: Types.ObjectId;
    tags: string[];
    views: number;
    likes: number;
    hearts: number;
    comments: {
        user: string;
        content: string;
        createdAt: Date;
    }[];
    estimatedReadTime: number;
    metaDescription?: string;
    createdAt?: Date;
    updatedAt?: Date;
};