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



// import multer from "multer";
// import path from "path";
// import { v2 as cloudinary } from 'cloudinary';
// import fs from "fs";
// import configs from "../configs";

// // Configuration
// cloudinary.config({
//     cloud_name: configs.cloudinary.cloud_name,
//     api_key: configs.cloudinary.api_key,
//     api_secret: configs.cloudinary.api_secret
// });


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, path.join(process.cwd(), '/uploads'))
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname)
//     }
// });

// // console.log(path.join(process.cwd(), '/uploads'));
// const upload = multer({ storage: storage });


// const uploadToCloudinary = async (file: any) => {

//     // console.log({ file });
//     return new Promise((resolve, reject) => {
//         cloudinary.uploader
//             .upload(
//                 file.path, {
//                 public_id: file.originalname,
//             }, (error, result) => {
//                 fs.unlinkSync(file.path)
//                 if (error) {
//                     reject(error)
//                 } else {
//                     resolve(result)
//                 }
//             })

//     })
// };



// export const fileUploader = {
//     upload,
//     uploadToCloudinary
// };