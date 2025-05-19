import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ExperienceService } from "./experience.service";

const createExperience = catchAsync(async (req, res) => {
    const contact = await ExperienceService.createExperience(req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Experience created successfully",
        data: contact,
    });
});

const getAllExperiences = catchAsync(async (req, res) => {
    const contacts = await ExperienceService.getAllExperience();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Experiences retrieved successfully",
        data: contacts.data,
        meta: contacts.meta,
    });
});

const getExperienceById = catchAsync(async (req, res) => {
    const contact = await ExperienceService.getExperienceById(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Experience retrieved successfully",
        data: contact,
    });
});

const updateExperience = catchAsync(async (req, res) => {
    const contact = await ExperienceService.updateExperience(req.params.id, req.body);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Experience updated successfully",
        data: contact,
    });
});

const deleteExperience = catchAsync(async (req, res) => {
    const contact = await ExperienceService.deleteExperience(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Experience deleted successfully",
        data: contact,
    });
});


export const ExperienceController = {
    createExperience,
    getAllExperiences,
    getExperienceById,
    updateExperience,
    deleteExperience
};