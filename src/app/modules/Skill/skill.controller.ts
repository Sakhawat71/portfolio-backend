import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { SkillService } from "./skill.service";

const createSkill = catchAsync(async (req, res) => {
    const result = await SkillService.createSkill(req);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: 'Skill created successfully',
        data: result,
    });
});


const getAllSkills = catchAsync(async (req, res) => {

    const result = await SkillService.getAllSkills();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Skills fetched successfully',
        meta: result.meta,
        data: result.data,
    });
});


const getSkillById = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await SkillService.getSkillById(id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Skill fetched successfully!',
        data: result,
    });
});


const updateSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await SkillService.updateSkill(id, req);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Skill Updated Successfully!',
        data: result,
    });
});


const deleteSkill = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await SkillService.deleteSkill(id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: 'Skill Deleted Successfully!',
        data: null,
    });
});


export const SkillController = {
    createSkill,
    getAllSkills,
    getSkillById,
    updateSkill,
    deleteSkill,
};