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

const getBlogById = async (id: string) => {
    const blog = await prisma.blog.findUnique({
        where: { id },
    });
    if (!blog) {
        throw new Error("Blog not found");
    }
    return blog;
}

export const BlogService = {
    getAllBlogs,
    getBlogById,
    
};