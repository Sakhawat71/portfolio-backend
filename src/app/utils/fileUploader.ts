import multer from "multer";
import path from "path";
import { v2 as cloudinary } from 'cloudinary';
import DatauriParser from 'datauri/parser';
import configs from "../configs";

// Config Cloudinary
cloudinary.config({
    cloud_name: configs.cloudinary.cloud_name,
    api_key: configs.cloudinary.api_key,
    api_secret: configs.cloudinary.api_secret
});

// Memory storage for multer (no need to store on disk)
const storage = multer.memoryStorage();
const upload = multer({ storage });

// DataUri parser
const parser = new DatauriParser();

// Upload to Cloudinary from memory
const uploadToCloudinary = async (file: Express.Multer.File) => {
    const ext = path.extname(file.originalname);
    const dataUri = parser.format(ext, file.buffer);

    return new Promise((resolve, reject) => {
        cloudinary.uploader.upload(
            dataUri.content || '',
            { public_id: path.parse(file.originalname).name },
            (error, result) => {
                if (error) reject(error);
                else resolve(result);
            }
        );
    });
};

export const fileUploader = {
    upload,
    uploadToCloudinary
};
