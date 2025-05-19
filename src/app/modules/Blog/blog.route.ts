import { Router } from "express";
import { BlogController } from "./blog.controller";


const router = Router();

router.get(
    '/',
    BlogController.getAllContacts
);


export const BlogRoutes = router;