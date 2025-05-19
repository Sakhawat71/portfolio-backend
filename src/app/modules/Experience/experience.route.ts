import { Router } from "express";
import auth from "../../middlewares/auth";
import { ExperienceController } from "./experience.controller";


const router = Router();

router.get(
    "/",
    ExperienceController.getAllExperiences,
);

router.get(
    "/:id",
    ExperienceController.getExperienceById,
);

router.post(
    "/create-experience",
    auth("ADMIN"),
    ExperienceController.createExperience,
);

router.patch(
    '/:id',
    auth("ADMIN"),
    ExperienceController.updateExperience,
);

router.delete(
    '/:id',
    auth("ADMIN"),
    ExperienceController.deleteExperience,
);


export const ExperienceRoutes = router;