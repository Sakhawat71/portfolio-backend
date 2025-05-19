import multer from "multer";
import path from "path";
import { v2 as cloudinary } from 'cloudinary';
import fs from "fs";
import configs from "../configs";

// Configuration
cloudinary.config({
    cloud_name: configs.cloudinary.cloud_name,
    api_key: configs.cloudinary.api_key,
    api_secret: configs.cloudinary.api_secret
});


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(process.cwd(), '/uploads'))
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

// console.log(path.join(process.cwd(), '/uploads'));
const upload = multer({ storage: storage });


const uploadToCloudinary = async (file: any) => {

    // console.log({ file });
    return new Promise((resolve, reject) => {
        cloudinary.uploader
            .upload(
                file.path, {
                public_id: file.originalname,
            }, (error, result) => {
                fs.unlinkSync(file.path)
                if (error) {
                    reject(error)
                } else {
                    resolve(result)
                }
            })

    })
};



export const fileUploader = {
    upload,
    uploadToCloudinary
};