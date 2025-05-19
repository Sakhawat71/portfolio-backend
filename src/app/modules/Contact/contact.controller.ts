import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ContactService } from "./contact.service";

const createContact = catchAsync(async (req, res) => {
    const contact = await ContactService.createContact(req.body);
    sendResponse(res, {
        statusCode: status.CREATED,
        success: true,
        message: "Contact created successfully",
        data: contact,
    });
});

const getAllContacts = catchAsync(async (req, res) => {
    const contacts = await ContactService.getAllContacts();
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Contacts retrieved successfully",
        data: contacts.data,
        meta: contacts.meta,
    });
});

const getContactById = catchAsync(async (req, res) => {
    const contact = await ContactService.getContactById(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Contact retrieved successfully",
        data: contact,
    });
});

const deleteContact = catchAsync(async (req, res) => {
    const contact = await ContactService.deleteContact(req.params.id);
    sendResponse(res, {
        statusCode: status.OK,
        success: true,
        message: "Contact deleted successfully",
        data: contact,
    });
});


export const ContactController = {
    createContact,
    getAllContacts,
    getContactById,
    deleteContact
};