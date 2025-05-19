import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { AuthService } from "./auth.service";

const login = catchAsync(async (req, res) => {

    const { email, password } = req.body;
    const resutl = await AuthService.loginInToDB({ email, password });
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Login successful",
        data: resutl,
    });
});


const register = catchAsync(async (req, res) => {
    const { name, email, password } = req.body;
    const resutl = await AuthService.registerInDB({ name, email, password });
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Register successful",
        data: resutl,
    });
});

export const AuthController = {
    login,
    register
};