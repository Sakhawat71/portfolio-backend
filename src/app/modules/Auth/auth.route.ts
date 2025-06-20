import { Router } from "express";
import { AuthController } from "./auth.controller";


const router = Router();

router.post(
    "/login",
    AuthController.login
);

router.post(
    "/register",
    AuthController.register
);

router.get(
    "/statistics",
    AuthController.getStatistics
);

export const AuthRoutes = router;