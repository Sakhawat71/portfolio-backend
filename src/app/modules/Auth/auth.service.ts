import configs from "../../configs";
import generateToken from "../../utils/generateToken";
import prisma from "../../utils/prisma";
import bcrypt from "bcrypt";
import { ILogin, IRegister } from "./auth.interface";

const loginInToDB = async (payload: ILogin) => {
    const userData = await prisma.user.findUnique({
        where: {
            email: payload.email,
        }
    });
    if (!userData) {
        throw new Error("user not found")
    };

    const isCorrectPassword: boolean = await bcrypt.compare(payload.password, userData.password);
    if (!isCorrectPassword) {
        throw new Error("password incurrect")
    };

    const accessToken = generateToken({
        email: userData.email,
        role: userData.role,
    },
        configs.jwt.jwt_secret as string,
        configs.jwt.expiresin as string
    );

    return {
        accessToken,
    };
};


const registerInDB = async (payload: IRegister) => {
    const isUserExist = await prisma.user.findUnique({
        where: {
            email: payload.email,
        }
    });
    if (isUserExist) {
        throw new Error("user already exist")
    };

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const userData = await prisma.user.create({
        data: {
            name: payload.name,
            email: payload.email,
            password: hashedPassword,
        }
    });

    return userData;
};

export const AuthService = {
    loginInToDB,
    registerInDB
};