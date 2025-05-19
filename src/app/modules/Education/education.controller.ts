import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { EducationService } from "./education.service";

const createEducation = catchAsync(async (req, res) => {
    const contact = await EducationService.createEducation(req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Education created successfully",
        data: contact,
    });
});

const getAllEducations = catchAsync(async (req, res) => {
    const contacts = await EducationService.getAllEducation();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Educations retrieved successfully",
        data: contacts.data,
        meta: contacts.meta,
    });
});

const getEducationById = catchAsync(async (req, res) => {
    const contact = await EducationService.getEducationById(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Education retrieved successfully",
        data: contact,
    });
});

const updateEducation = catchAsync(async (req, res) => {
    const contact = await EducationService.updateEducation(req.params.id, req.body);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Education updated successfully",
        data: contact,
    });
});

const deleteEducation = catchAsync(async (req, res) => {
    const contact = await EducationService.deleteEducation(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Education deleted successfully",
        data: contact,
    });
});


export const EducationController = {
    createEducation,
    getAllEducations,
    getEducationById,
    updateEducation,
    deleteEducation
};