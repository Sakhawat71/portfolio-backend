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

const getAllProjects = async () => {
    const projects = await prisma.project.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });

    const totalProjects = await prisma.project.count();

    return {
        meta: {
            total: totalProjects,
        },
        data: projects,
    };
};

const getProjectById = async (id: string) => {
    const project = await prisma.project.findUnique({
        where: {
            id,
        },
    });

    if (!project) {
        throw new Error("Project not found");
    }

    return project;
}

const updateProject = async (id: string, req: Request) => {

    const isExist = await prisma.project.findUnique({
        where: {
            id,
        },
    });
    if (!isExist) {
        throw new Error("Project not found");
    };

    const file = req.file;
    if (file) {
        const uploadedImage = await fileUploader.uploadToCloudinary(file) as { secure_url: string };
        req.body.image = uploadedImage?.secure_url;
    } else {
        req.body.image = isExist.image;
    };

    if(!req.body){
        req.body = {};
    };

    const project = await prisma.project.update({
        where: {
            id,
        },
        data: req.body,
    });

    return project;
};

const deleteProject = async (id: string) => {

    const isExist = await prisma.project.findUnique({
        where: {
            id,
        },
    });
    if (!isExist) {
        throw new Error("Project not found");
    };

    const project = await prisma.project.delete({
        where: {
            id,
        },
    });

    return project;
};




export const ProjectService = {
    createProject,
    getAllProjects,
    getProjectById,
    updateProject,
    deleteProject,
};