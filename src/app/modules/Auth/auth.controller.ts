import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const login = catchAsync(async (req, res) => {
    const resutl = await AuthService.loginInToDB(req.body);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Login successful",
        data: resutl,
    });
});


const register = catchAsync(async (req, res) => {
    const resutl = await AuthService.registerInDB(req.body);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Register successful",
        data: resutl,
    });
});


const getStatistics = catchAsync(async (req,res) => {
    const result = await AuthService.statistics();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Statistics fetched successfully",
        data: result,
    });
})

export const AuthController = {
    login,
    register,
    getStatistics
};