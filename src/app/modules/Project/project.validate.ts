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
        .url("Please enter a valid URL"),
    // .startsWith('https://', "URL must start with https://"),
    githubUrl: z.string()
        .url("Please enter a valid GitHub URL"),
    // .includes('github.com', { message: "Must be a GitHub URL" }),
    backGitUrl: z.string().optional(),
    category: z.enum(["HTML-CSS", "JavaScript", "FrontEnd", "MERN", "Full Stack"], {
        errorMap: () => ({ message: "Please select a valid category" })
    }),
    highlights: z.array(
        z.string().min(1, "Highlight item can't be empty")
    ),
    isTeam: z.boolean().optional(),
    teamSize: z.number().nullable().optional(),
    roleInTeam: z.string().nullable().optional(),
    startDate: z.preprocess(
        (val) => (typeof val === 'string' || typeof val === 'number' || val instanceof Date) && val ? new Date(val) : null,
        z.date().nullable()
    ),
    endDate: z.preprocess(
        (val) => (typeof val === 'string' || typeof val === 'number' || val instanceof Date) && val ? new Date(val) : null,
        z.date().nullable()
    ),


});


const updateProject = z.object({
    title: z.string()
        .min(3, "Title must be at least 3 characters")
        .max(100, "Title can't exceed 100 characters")
        .optional(),

    description: z.string()
        .min(10, "Description must be at least 10 characters")
        .max(500, "Description can't exceed 500 characters")
        .optional(),

    techStack: z.array(
        z.string().min(1, "Tech stack item can't be empty")
    ).nonempty("At least one technology is required").optional(),

    liveUrl: z.string()
        .url("Please enter a valid URL")
        .startsWith('https://', "URL must start with https://")
        .optional(),

    githubUrl: z.string()
        .url("Please enter a valid GitHub URL")
        .includes('github.com', { message: "Must be a GitHub URL" })
        .optional(),

    isTeam: z.boolean().optional(), // or .default(false)
    teamSize: z.number().nullable().optional(),
    roleInTeam: z.string().nullable().optional(),
    startDate: z.string().nullable().optional(),
    endDate: z.string().nullable().optional(),
});


export const ProjectValidation = {
    createProject,
    updateProject
};