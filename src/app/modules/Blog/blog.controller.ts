// 3. Controller

import { NextFunction, Request, Response } from 'express'
import { blogService } from './blog.service';
import { AuthenticationError, NotFoundError } from '../Error/error';
import { blogModel } from './blog.model';
import sendResponse from '../Utilities/sendResponse';
import { StatusCodes } from 'http-status-codes';

// adding blog to database
const addingBlog = async (req: Request, res: Response) => {
  try {
    const blogData = {
      ...req.body,
    };
    const addedBlog = await blogService.addAnewBlog(blogData);

    sendResponse(res, {
      statusCode: StatusCodes.CREATED,
      success: true,
      message: 'Blog posted successfully!',
      data: addedBlog
    });
  } catch (error) {
    let errorMessage = 'Failed to post blog!';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: errorMessage,
      data: {}
    });
  }
};

// getting blogs from database
const gettingblogs = async (req: Request, res: Response) => {
  try {

    const data = await blogService.getblogs(req.query);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Blogs retrieved successfully',
      data: data,
    });
  } catch (error) {
    let errorMessage = 'Failed to retrieve Blogs'

    if (error instanceof Error) {
      errorMessage = error.message;
    }
    sendResponse(res, {
      statusCode: StatusCodes.BAD_REQUEST,
      success: false,
      message: errorMessage,
      data: {}
    });
  }
};
// getting single blog

const gettingSingleBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blog = await blogService.getBlogById(req.params.id)
    if (!blog) {
      throw new NotFoundError("Blog not found");
    }

    res.status(200).json({
      success: true,
      message: "Blog fetched successfully",
      statusCode: 200,
      data: blog,
    });
  } catch (error) {
    next(error); // Pass to global error handler
  }
};
// get blogs by author id

const gettingBlogsByAuthorId = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blogs = await blogModel.find({ author: req.params.id });

    if (!blogs.length) {
      throw new NotFoundError("No blogs found for this author");
    }

    res.status(200).json({
      success: true,
      message: "Blogs fetched successfully",
      statusCode: 200,
      data: blogs,
    });
  } catch (error) {
    next(error); // Pass to global error handler
  }
};

// deleting blog from the database 

const deletingBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {

    await blogService.deleteBlogById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
}
// admin access to delete any blog by id

const deletingAnyBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = req.user;

    if (!user) {
      throw new AuthenticationError("User not authenticated");
    }

    const blog = await blogModel.findById(req.params.id);

    if (!blog) {
      res.status(404).json({
        success: true,
        message: "Blog Not found",
        statusCode: 404,
      });
    }

    await blogService.deleteBlogById(blog?.id);

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      statusCode: 200,
    });
  } catch (error) {
    next(error);
  }
}



// update blog by id

const updatingBlog = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const blog = await blogModel.findById(req.params.id);

    if (!blog) {
      throw new NotFoundError("Blog not found");
    }

    const updatedBlog = await blogService.updateBlogInDB(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Blog updated successfully",
      statusCode: 200,
      data: updatedBlog,
    });
  } catch (error) {
    next(error);
  }
}


// sending to routes
export const blogController = {
  addingBlog,
  gettingblogs,
  gettingSingleBlog,
  deletingBlog,
  deletingAnyBlog,
  updatingBlog,
  gettingBlogsByAuthorId
}
