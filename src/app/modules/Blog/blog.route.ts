import { Router } from "express";
import { BlogController } from "./blog.controller";
import auth from "../../middlewares/auth";


const router = Router();

router.get(
    '/',
    BlogController.getAllContacts
);

router.get(
    "/:id",
    BlogController.getBlogById
);

export const BlogRoutes = router;