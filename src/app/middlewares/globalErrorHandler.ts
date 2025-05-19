import { status } from 'http-status';
import { ErrorRequestHandler } from "express";
import { sendResponse } from '../utils/sendResponse';


const globalErrorHandler: ErrorRequestHandler = (
    error,
    req,
    res,
    next
) => {

    sendResponse(res, {
        statusCode: status.BAD_REQUEST,
        success: false,
        message: error.message,
        meta: error.meta,
        error: error
    })
};

export default globalErrorHandler;