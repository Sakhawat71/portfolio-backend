import { Request } from "express";
import { fileUploader } from "../../utils/fileUploader";
import prisma from "../../utils/prisma";

const createSkill = async (req: Request) => {
    const file = req.file;
    if (!file) {
        throw new Error("Image is required");
    };

    if (file) {
        const uploadedImage = await fileUploader.uploadToCloudinary(file) as { secure_url: string };
        req.body.icon = uploadedImage?.secure_url;
    };

    return await prisma.skill.create({
        data: req.body
    });
};

const getAllSkills = async () => {
    const skills = await prisma.skill.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });

    const totalSkills = await prisma.skill.count();

    return {
        meta: {
            total: totalSkills,
        },
        data: skills,
    };
};

const getSkillById = async (id: string) => {
    const skill = await prisma.skill.findUnique({
        where: {
            id,
        },
    });

    if (!skill) {
        throw new Error("Skill not found");
    }

    return skill;
}

const updateSkill = async (id: string, req: Request) => {

    const isExist = await prisma.skill.findUnique({
        where: {
            id,
        },
    });
    if (!isExist) {
        throw new Error("Skill not found");
    };

    const file = req.file;
    if (file) {
        const uploadedImage = await fileUploader.uploadToCloudinary(file) as { secure_url: string };
        req.body.image = uploadedImage?.secure_url;
    } else {
        req.body.icon = isExist.icon;
    };

    if(!req.body){
        req.body = {};
    };

    const skill = await prisma.skill.update({
        where: {
            id,
        },
        data: req.body,
    });

    return skill;
};

const deleteSkill = async (id: string) => {

    const isExist = await prisma.skill.findUnique({
        where: {
            id,
        },
    });
    if (!isExist) {
        throw new Error("Skill not found");
    };

    const skill = await prisma.skill.delete({
        where: {
            id,
        },
    });

    return skill;
};


export const SkillService = {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill,
};