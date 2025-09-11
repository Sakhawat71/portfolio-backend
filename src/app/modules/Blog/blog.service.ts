import { Request } from "express";
import prisma from "../../utils/prisma";
import { fileUploader } from "../../utils/fileUploader";
import { IBlog } from "./blog.interface";

const getAllBlogs = async () => {
    const blogs = await prisma.blog.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });
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

const createBlog = async (payload: any) => {
    const blog = await prisma.blog.create({
        data: payload,
    });
    return blog;
};

export const BlogService = {
    getAllBlogs,
    getBlogById,
    createBlog,
};