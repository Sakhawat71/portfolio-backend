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

export const BlogController = {
    getAllContacts
};