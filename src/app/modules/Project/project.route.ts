import { NextFunction, Request, Response, Router } from "express";
import { ProjectController } from "./project.controller";
import { fileUploader } from "../../utils/fileUploader";
import auth from "../../middlewares/auth";
import { ProjectValidation } from "./project.validate";


const router = Router();

router.post(
    "/create-project",
    auth("ADMIN"),
    fileUploader.upload.single("image"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = ProjectValidation.createProject.parse(JSON.parse(req.body.data));
        ProjectController.createProject(req, res, next);
    },
);


export const ProjectRoutes = router;