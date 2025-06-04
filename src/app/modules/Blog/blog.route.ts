import { NextFunction, Request, Response, Router } from "express";
import { BlogController } from "./blog.controller";
import auth from "../../middlewares/auth";
import { fileUploader } from "../../utils/fileUploader";


const router = Router();

router.get(
    '/',
    BlogController.getAllContacts
);

router.get(
    "/:id",
    BlogController.getBlogById
);

router.post(
    "/create-blog",
    fileUploader.upload.single("image"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        BlogController.createBlog(req, res, next);
    },
);

export const BlogRoutes = router;