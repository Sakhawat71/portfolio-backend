import { NextFunction, Request, Response, Router } from "express";
import { ProjectController } from "./project.controller";
import { fileUploader } from "../../utils/fileUploader";
import auth from "../../middlewares/auth";
import { ProjectValidation } from "./project.validate";


const router = Router();

router.get(
    "/",
    ProjectController.getAllProjects,
);

router.get(
    "/:id",
    ProjectController.getProjectById,
);

router.post(
    "/create-project",
    auth("ADMIN"),
    fileUploader.upload.single("image"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = ProjectValidation.createProject.parse(JSON.parse(req.body.data));
        ProjectController.createProject(req, res, next);
    },
);

router.patch(
    "/:id",
    auth("ADMIN"),
    fileUploader.upload.single("image"),
    (req: Request, res: Response, next: NextFunction) => {
        if (req.body.data) {
            req.body = ProjectValidation.updateProject.parse(JSON.parse(req.body.data));
        } else {
            req.body = {};
        }
        ProjectController.updateProject(req, res, next);
    },
);

router.delete(
    "/:id",
    auth("ADMIN"),
    ProjectController.deleteProject,
);


export const ProjectRoutes = router;