import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { IRoute } from "../interfaces/router.type";


const router = Router();
const routersModule: IRoute[] = [
    {
        path: '/auth',
        route: AuthRoutes,
    }
];

routersModule.forEach((r) => {
    router.use(r.path, r.route);
});

export default router;