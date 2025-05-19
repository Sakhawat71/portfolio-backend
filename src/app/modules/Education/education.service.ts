import prisma from "../../utils/prisma";

const createEducation = async (payload: any) => {
    return await prisma.education.create({
        data: payload
    });
};

const getAllEducation = async () => {
    const result = await prisma.education.findMany();
    const total = await prisma.education.count();
    return{
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