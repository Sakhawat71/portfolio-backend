import { Router } from "express";
import auth from "../../middlewares/auth";
import { ContactController } from "./contact.controller";


const router = Router();

router.get(
    "/",
    auth("ADMIN"),
    ContactController.getAllContacts,
);

router.get(
    "/:id",
    auth("ADMIN"),
    ContactController.getContactById,
);

router.post(
    "/send-message",
    ContactController.createContact,
);

router.delete(
    '/:id',
    auth("ADMIN"),
    ContactController.deleteContact,
);


export const ContactRoutes = router;