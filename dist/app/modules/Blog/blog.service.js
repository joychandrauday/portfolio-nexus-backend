"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
// 4.service
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogService = void 0;
const http_status_codes_1 = require("http-status-codes");
const sendResponse_1 = __importDefault(require("../Utilities/sendResponse"));
const blog_model_1 = require("./blog.model");
// create a new blog
const addAnewBlog = (blog) => __awaiter(void 0, void 0, void 0, function* () {
    // Save blog to the database
    const result = yield blog_model_1.blogModel.create(blog);
    return result;
});
// get all blogs
const getblogs = (req) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { search = "", sortBy = "createdAt", sortOrder = "desc", filter = "", category = "", tags = "", page = "1", limit } = req || {}; // Ensure req.query is defined
        // Build the query object
        const query = {};
        // Search by title or content
        if (search) {
            query.$or = [
                { title: { $regex: search, $options: "i" } }, // Case-insensitive search in title
                { content: { $regex: search, $options: "i" } }, // Case-insensitive search in content
            ];
        }
        // Filter by author
        if (filter) {
            query.author = filter;
        }
        // Filter by category
        if (category) {
            query.category = category;
        }
        // Filter by tags (matches any of the given tags)
        if (tags) {
            const tagsArray = Array.isArray(tags) ? tags : tags.split(",");
            query.tags = { $in: tagsArray };
        }
        // Build sort object
        const sort = {};
        if (sortBy) {
            sort[sortBy] = sortOrder === "asc" ? 1 : -1; // Ascending or Descending
        }
        // Convert page & limit to numbers
        const pageNumber = Number(page) > 0 ? Number(page) : 1;
        const limitNumber = limit ? Number(limit) : 10;
        const skip = (pageNumber - 1) * limitNumber;
        // Fetch blogs with pagination
        const blogs = yield blog_model_1.blogModel
            .find(query) // Apply query filters
            .sort(sort) // Apply sorting
            .skip(skip) // Skip for pagination
            .limit(limitNumber) // Limit results per page
            .populate("author", "name email") // Populate author details
            .populate("category", "name"); // Populate category name
        // Total count for pagination meta
        const totalBlogs = yield blog_model_1.blogModel.countDocuments(query);
        const meta = {
            total: totalBlogs,
            page: pageNumber,
            limit: limitNumber > 0 ? limitNumber : totalBlogs,
            totalPages: limitNumber > 0 ? Math.ceil(totalBlogs / limitNumber) : 1,
        };
        return {
            blogs,
            meta
        };
    }
    catch (error) {
        let errorMessage = 'Failed to retrieve listings';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        (0, sendResponse_1.default)(req, {
            statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
            success: false,
            message: errorMessage,
            data: {}
        });
    }
});
// fet single blogs
const getBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield blog_model_1.blogModel.findById(id).populate("author", "name email").populate("category", "name _id"); // Populate category name;
});
const deleteBlogById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.blogModel.findByIdAndDelete(id);
    return result;
});
// update blog by id
const updateBlogInDB = (id, updatedBlog) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield blog_model_1.blogModel.findByIdAndUpdate(id, updatedBlog, { new: true });
    return result;
});
// sending all to controller
exports.blogService = {
    addAnewBlog,
    getblogs,
    updateBlogInDB,
    deleteBlogById,
    getBlogById
};
