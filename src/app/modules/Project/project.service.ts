import { Request } from "express";
import { IProject } from "./project.interface";
import { fileUploader } from "../../utils/fileUploader";
import prisma from "../../utils/prisma";

const createProject = async (req: Request) => {
    if (req.file) {
        const uploadedImage = await fileUploader.uploadToCloudinary(req.file);
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