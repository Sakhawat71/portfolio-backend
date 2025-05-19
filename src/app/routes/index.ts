import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { IRoute } from "../interfaces/router.type";
import { ProjectRoutes } from "../modules/Project/project.route";


const router = Router();
const routersModule: IRoute[] = [
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/projects',
        route: ProjectRoutes,
    }
];

routersModule.forEach((r) => {
    router.use(r.path, r.route);
});

export default router;