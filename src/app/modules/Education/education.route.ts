import { Router } from "express";
import auth from "../../middlewares/auth";
import { EducationController } from "./education.controller";


const router = Router();

router.get(
    "/",
    EducationController.getAllEducations,
);

router.get(
    "/:id",
    EducationController.getEducationById,
);

router.post(
    "/send-message",
    auth("ADMIN"),
    EducationController.createEducation,
);

router.patch(
    '/:id',
    auth("ADMIN"),
    EducationController.updateEducation,
);

router.delete(
    '/:id',
    auth("ADMIN"),
    EducationController.deleteEducation,
);


export const EducationRoutes = router;