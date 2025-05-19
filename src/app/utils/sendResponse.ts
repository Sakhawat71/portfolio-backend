import { error } from "console";
import { Response } from "express";

type TResponse<T> = {
    statusCode: number;
    success: boolean;
    message?: string;
    data?: T;
    meta?: {
        total?: number;
        page?: number;
        limit?: number;
        [key: string]: any;
    };
    error? : any;
};


export const sendResponse = <T>(
    res: Response,
    resInfo: TResponse<T>
) => {
    res.status(resInfo.statusCode).json({
        success: resInfo.success,
        message: resInfo.message,
        meta: resInfo.meta,
        data: resInfo.data,
        error: resInfo.error
    })
}