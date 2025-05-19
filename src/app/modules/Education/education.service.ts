import prisma from "../../utils/prisma";
import { IEducation } from "./education.interface";

const createEducation = async (payload: IEducation) => {
    return await prisma.education.create({
        data: {
            institution: payload.institution,
            degree: payload.degree,
            startDate: new Date(payload.startDate),
            endDate: payload.endDate ? new Date(payload.endDate) : null,
            description: payload.description,
        }
    });
};

const getAllEducation = async () => {
    const result = await prisma.education.findMany();
    const total = await prisma.education.count();
    return {
        data: result,
        meta: {
            total
        }
    };
};

const getEducationById = async (id: string) => {
    return await prisma.education.findUnique({
        where: {
            id
        }
    });
};

const updateEducation = async (id: string, payload: any) => {
    return await prisma.education.update({
        where: {
            id
        },
        data: payload
    });
};

const deleteEducation = async (id: string) => {
    return await prisma.education.delete({
        where: {
            id
        }
    });
};


export const EducationService = {
    createEducation,
    getAllEducation,
    getEducationById,
    updateEducation,
    deleteEducation,
};