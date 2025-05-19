import { z } from 'zod';

const createProject = z.object({
    title: z.string()
        .min(3, "Title must be at least 3 characters")
        .max(100, "Title can't exceed 100 characters"),

    description: z.string()
        .min(10, "Description must be at least 10 characters")
        .max(500, "Description can't exceed 500 characters"),

    techStack: z.array(
        z.string().min(1, "Tech stack item can't be empty")
    ).nonempty("At least one technology is required"),

    liveUrl: z.string()
        .url("Please enter a valid URL")
        .startsWith('https://', "URL must start with https://"),

    githubUrl: z.string()
        .url("Please enter a valid GitHub URL")
        .includes('github.com', { message: "Must be a GitHub URL" }),
});



export const ProjectValidation = {
    createProject,
}