import jwt, { JwtPayload } from 'jsonwebtoken';
import { NextFunction, Request, Response } from "express";
import catchAsync from "../utils/catchAsync";
import { AppError } from '../errors/AppError';
import status from 'http-status';
import configs from '../configs';


const auth = (...roles: string[]) => {
    return catchAsync(async (
        req: Request & { user?: any },
        res: Response,
        next: NextFunction
    ) => {

        const token = req.headers.authorization;
        if (!token) {
            throw new AppError(
                "You are not Authorized!",
                status.UNAUTHORIZED,
            );
        };

        const decoded = jwt.verify(
            token,
            configs.jwt.jwt_secret as string
        ) as JwtPayload;
        if (!decoded) {
            throw new AppError(
                'You are not Authorized',
                status.UNAUTHORIZED,
            );
        };

        if (roles.length && !roles.includes(decoded.role)) {
            throw new AppError(
                "You are not Authorized",
                status.UNAUTHORIZED,
            );
        };

        req.user = decoded;

        next();
    })
};


export default auth;