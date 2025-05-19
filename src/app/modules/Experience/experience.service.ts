import prisma from "../../utils/prisma";
import { IExperience } from "./experience.interface";

const createExperience = async (payload: IExperience) => {
    return await prisma.experience.create({
        data: {
            company: payload.company,
            position: payload.position,
            startDate: new Date(payload.startDate),
            endDate: payload.endDate ? new Date(payload.endDate) : null,
            description: payload.description,
        }
    });
};

const getAllExperience = async () => {
    const result = await prisma.experience.findMany();
    const total = await prisma.experience.count();
    return {
        data: result,
        meta: {
            total
        }
    };
};

const getExperienceById = async (id: string) => {
    return await prisma.experience.findUnique({
        where: {
            id
        }
    });
};

const updateExperience = async (id: string, payload: any) => {
    return await prisma.experience.update({
        where: {
            id
        },
        data: payload
    });
};

const deleteExperience = async (id: string) => {
    return await prisma.experience.delete({
        where: {
            id
        }
    });
};


export const ExperienceService = {
    createExperience,
    getAllExperience,
    getExperienceById,
    updateExperience,
    deleteExperience,
};