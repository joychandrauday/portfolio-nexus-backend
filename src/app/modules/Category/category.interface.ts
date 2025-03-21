import { Types } from 'mongoose';

export type ICategory = {
    name: string;
    description?: string;
    image: string;
    slug: string;
    parentCategory?: Types.ObjectId;
};
