import { Router } from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { IRoute } from "../interfaces/router.type";
import { ProjectRoutes } from "../modules/Project/project.route";
import { SkillRoutes } from "../modules/Skill/skill.route";
import { ContactRoutes } from "../modules/Contact/contact.route";
import { EducationRoutes } from "../modules/Education/education.route";
import { ExperienceRoutes } from "../modules/Experience/experience.route";


const router = Router();
const routersModule: IRoute[] = [
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/projects',
        route: ProjectRoutes,
    },
    {
        path: '/skills',
        route: SkillRoutes,
    },
    {
        path: '/contact',
        route: ContactRoutes,
    },
    {
        path: '/educations',
        route: EducationRoutes,
    },
    {
        path: '/experiences',
        route: ExperienceRoutes,
    },

];

routersModule.forEach((r) => {
    router.use(r.path, r.route);
});

export default router;