"use strict";
// 3. Controller
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
exports.blogController = void 0;
const blog_service_1 = require("./blog.service");
const error_1 = require("../Error/error");
const blog_model_1 = require("./blog.model");
const sendResponse_1 = __importDefault(require("../Utilities/sendResponse"));
const http_status_codes_1 = require("http-status-codes");
// adding blog to database
const addingBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogData = Object.assign({}, req.body);
        const addedBlog = yield blog_service_1.blogService.addAnewBlog(blogData);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.CREATED,
            success: true,
            message: 'Blog posted successfully!',
            data: addedBlog
        });
    }
    catch (error) {
        let errorMessage = 'Failed to post blog!';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
            success: false,
            message: errorMessage,
            data: {}
        });
    }
});
// getting blogs from database
const gettingblogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield blog_service_1.blogService.getblogs(req.query);
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.OK,
            success: true,
            message: 'Blogs retrieved successfully',
            data: data,
        });
    }
    catch (error) {
        let errorMessage = 'Failed to retrieve Blogs';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        (0, sendResponse_1.default)(res, {
            statusCode: http_status_codes_1.StatusCodes.BAD_REQUEST,
            success: false,
            message: errorMessage,
            data: {}
        });
    }
});
// getting single blog
const gettingSingleBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_service_1.blogService.getBlogById(req.params.id);
        if (!blog) {
            throw new error_1.NotFoundError("Blog not found");
        }
        res.status(200).json({
            success: true,
            message: "Blog fetched successfully",
            statusCode: 200,
            data: blog,
        });
    }
    catch (error) {
        next(error); // Pass to global error handler
    }
});
// get blogs by author id
const gettingBlogsByAuthorId = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blog_model_1.blogModel.find({ author: req.params.id });
        if (!blogs.length) {
            throw new error_1.NotFoundError("No blogs found for this author");
        }
        res.status(200).json({
            success: true,
            message: "Blogs fetched successfully",
            statusCode: 200,
            data: blogs,
        });
    }
    catch (error) {
        next(error); // Pass to global error handler
    }
});
// deleting blog from the database 
const deletingBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield blog_service_1.blogService.deleteBlogById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
            statusCode: 200,
        });
    }
    catch (error) {
        next(error);
    }
});
// admin access to delete any blog by id
const deletingAnyBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.user;
        if (!user) {
            throw new error_1.AuthenticationError("User not authenticated");
        }
        const blog = yield blog_model_1.blogModel.findById(req.params.id);
        if (!blog) {
            res.status(404).json({
                success: true,
                message: "Blog Not found",
                statusCode: 404,
            });
        }
        yield blog_service_1.blogService.deleteBlogById(blog === null || blog === void 0 ? void 0 : blog.id);
        res.status(200).json({
            success: true,
            message: "Blog deleted successfully",
            statusCode: 200,
        });
    }
    catch (error) {
        next(error);
    }
});
// update blog by id
const updatingBlog = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_model_1.blogModel.findById(req.params.id);
        if (!blog) {
            throw new error_1.NotFoundError("Blog not found");
        }
        const updatedBlog = yield blog_service_1.blogService.updateBlogInDB(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Blog updated successfully",
            statusCode: 200,
            data: updatedBlog,
        });
    }
    catch (error) {
        next(error);
    }
});
// sending to routes
exports.blogController = {
    addingBlog,
    gettingblogs,
    gettingSingleBlog,
    deletingBlog,
    deletingAnyBlog,
    updatingBlog,
    gettingBlogsByAuthorId
};
