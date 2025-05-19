import { NextFunction, Request, Response, Router } from "express";
import auth from "../../middlewares/auth";
import { ContactController } from "./contact.controller";


const router = Router();

router.get(
    "/",
    ContactController.getAllContacts,
);

router.get(
    "/:id",
    ContactController.getContactById,
);

router.post(
    "/send-message",
    ContactController.createContact
);

router.delete(
    '/:id',
    ContactController.deleteContact
);


export const ContactRoutes = router;