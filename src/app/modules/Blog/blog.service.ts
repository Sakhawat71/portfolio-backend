import prisma from "../../utils/prisma";

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

export const BlogService = {
    getAllBlogs,
};