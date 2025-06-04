import { Request } from "express";
import prisma from "../../utils/prisma";
import { fileUploader } from "../../utils/fileUploader";

const getAllBlogs = async () => {
    const blogs = await prisma.blog.findMany();
    const total = await prisma.blog.count();
    return {
        meta: {
            total
        },
        data: blogs,
    };
};

const getBlogById = async (id: string) => {
    const blog = await prisma.blog.findUnique({
        where: { id },
    });
    if (!blog) {
        throw new Error("Blog not found");
    }
    return blog;
};

const createBlog = async (req: Request) => {
    const file = req.file;
    if (!file) {
        throw new Error("Image is required");
    };

    if (file) {
        const uploadedImage = await fileUploader.uploadToCloudinary(file) as { secure_url: string };
        req.body.image = uploadedImage?.secure_url;
    };

    const blog = await prisma.blog.create({
        data: req.body,
    });
    return blog;
};

export const BlogService = {
    getAllBlogs,
    getBlogById,
    createBlog,
};