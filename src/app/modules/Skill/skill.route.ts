import { NextFunction, Request, Response, Router } from "express";
import { fileUploader } from "../../utils/fileUploader";
import auth from "../../middlewares/auth";
import { SkillController } from "./skill.controller";
import { createSkill, updateSkill } from "./skill.validation";


const router = Router();

router.get(
    "/",
    SkillController.getAllSkills,
);

router.get(
    "/:id",
    SkillController.getSkillById,
);

router.post(
    "/create-skill",
    auth("ADMIN"),
    fileUploader.upload.single("icon"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = createSkill.parse(JSON.parse(req.body.data));
        SkillController.createSkill(req, res, next);
    },
);

router.patch(
    "/:id",
    auth("ADMIN"),
    fileUploader.upload.single("icon"),
    (req: Request, res: Response, next: NextFunction) => {
        if (req.body.data) {
            req.body = updateSkill.parse(JSON.parse(req.body.data));
        } else {
            req.body = {};
        }
        SkillController.updateSkill(req, res, next);
    },
);

router.delete(
    "/:id",
    auth("ADMIN"),
    SkillController.deleteSkill,
);


export const SkillRoutes = router;