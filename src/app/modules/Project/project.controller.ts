import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ProjectService } from "./project.service";

const createProject = catchAsync(async (req, res) => {
    const result = await ProjectService.createProject(req);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: 'Project created successfully',
        data: result,
    });
});


// const getCategories = catchAsync(async (req, res) => {

//     const filters = pickQuery(req.query, ProjectFilterableFields);
//     const options = pickQuery(req.query, ProjectPaginationFields);

//     const result = await ProjectService.getCategories(filters, options);
//     sendResponse(res, {
//         statusCode: status.OK,
//         success: true,
//         message: 'Categories fetched successfully',
//         meta: result.meta,
//         data: result.data,
//     });
// });


// const getProjectById = catchAsync(async (req, res) => {
//     const { id } = req.params;
//     const result = await ProjectService.getProjectById(id);
//     sendResponse(res, {
//         statusCode: status.OK,
//         success: true,
//         message: 'Project fetched successfully!',
//         data: result,
//     });
// });


// const updateProject = catchAsync(async (req, res) => {
//     const { id } = req.params;
//     const result = await ProjectService.updateProject(id, req);
//     sendResponse(res, {
//         statusCode: status.OK,
//         success: true,
//         message: 'Project Updated Successfully!',
//         data: result,
//     });
// });


// const deleteProject = catchAsync(async (req, res) => {
//     const { id } = req.params;
//     const result = await ProjectService.deleteProject(id);
//     sendResponse(res, {
//         statusCode: status.OK,
//         success: true,
//         message: 'Project Deleted Successfully!',
//         data: null,
//     });
// });


export const ProjectController = {
    createProject,
    // getCategories,
    // getProjectById,
    // updateProject,
    // deleteProject,
};