/* eslint-disable @typescript-eslint/no-explicit-any */
// 4.service

import { StatusCodes } from "http-status-codes"
import sendResponse from "../Utilities/sendResponse"
import { IBlog } from "./blog.interface"
import { blogModel } from "./blog.model"


// create a new blog
const addAnewBlog = async (blog: IBlog) => {
  // Save blog to the database
  const result = await blogModel.create(blog)
  return result
}

// get all blogs
const getblogs = async (req: any) => {
  try {
    const {
      search = "",
      sortBy = "createdAt",
      sortOrder = "desc",
      filter = "",
      category = "",
      tags = "",
      page = "1",
      limit
    } = req || {}; // Ensure req.query is defined

    // Build the query object
    const query: any = {};

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
    const sort: any = {};
    if (sortBy) {
      sort[sortBy as string] = sortOrder === "asc" ? 1 : -1; // Ascending or Descending
    }

    // Convert page & limit to numbers
    const pageNumber = Number(page) > 0 ? Number(page) : 1;
    const limitNumber = limit ? Number(limit) : 10;
    const skip = (pageNumber - 1) * limitNumber;
    // Fetch blogs with pagination
    const blogs = await blogModel
      .find(query) // Apply query filters
      .sort(sort) // Apply sorting
      .skip(skip) // Skip for pagination
      .limit(limitNumber) // Limit results per page
      .populate("author", "name email") // Populate author details
      .populate("category", "name"); // Populate category name

    // Total count for pagination meta
    const totalBlogs = await blogModel.countDocuments(query);
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
  } catch (error) {
    let errorMessage = 'Failed to retrieve listings'

    if (error instanceof Error) {
      errorMessage = error.message;
    }
    sendResponse(req, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: errorMessage,
      data: {}
    });
  }
};


// fet single blogs

const getBlogById = async (id: string) => {
  return await blogModel.findById(id).populate("author", "name email").populate("category", "name _id"); // Populate category name;
};



const deleteBlogById = async (id: string) => {
  const result = await blogModel.findByIdAndDelete(id)

  return result
}

// update blog by id

const updateBlogInDB = async (id: string, updatedBlog: IBlog) => {
  const result = await blogModel.findByIdAndUpdate(id, updatedBlog, { new: true })
  return result
}

// sending all to controller
export const blogService = {
  addAnewBlog,
  getblogs,
  updateBlogInDB,
  deleteBlogById,
  getBlogById
}
