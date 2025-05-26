import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { BlogService } from "./blog.service";

const getAllContacts = catchAsync(async (req, res) => {
    const contacts = await BlogService.getAllBlogs();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Blogs retrieved successfully",
        data: contacts.data,
        meta: contacts.meta,
    });
});

const getBlogById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const blog = await BlogService.getBlogById(id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Blog retrieved successfully",
        data: blog,
    });
});

export const BlogController = {
    getAllContacts,
    getBlogById,
};