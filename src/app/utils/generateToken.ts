import jwt, { SignOptions } from 'jsonwebtoken';

const generateToken = (
    payload: { email: string; role: string },
    secret: string,
    expiresIn: string | number
): string => {
    const options: SignOptions = {
        expiresIn: expiresIn as SignOptions['expiresIn'],
        algorithm: 'HS256',
    };

    const token = jwt.sign(payload, secret, options);
    return token;
};


export default generateToken;