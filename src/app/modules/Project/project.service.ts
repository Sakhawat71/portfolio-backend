import { Request } from "express";
import { IProject } from "./project.interface";
import { fileUploader } from "../../utils/fileUploader";
import prisma from "../../utils/prisma";

const createProject = async (req: Request) => {
    const file = req.file;
    if (!file) {
        throw new Error("Image is required");
    };

    if (file) {
        const uploadedImage = await fileUploader.uploadToCloudinary(file) as { secure_url: string };
        req.body.image = uploadedImage?.secure_url;
    };

    return await prisma.project.create({
        data: req.body
    });
};




export const ProjectService = {
    createProject,
    // updateProject,
    // deleteProject,
    // getAllProjects,
    // getProjectById,
};