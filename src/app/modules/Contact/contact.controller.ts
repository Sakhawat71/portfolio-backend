import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { ContactService } from "./contact.service";
import { UAParser } from 'ua-parser-js';

const createContact = catchAsync(async (req, res) => {



    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    const userAgent = req.headers['user-agent'];
    const parser = new UAParser(userAgent);
    const ua = parser.getResult();

    let location = '';
    try {
        const geo = await fetch(`https://ipinfo.io/${ip}?token=${process.env.IP_TOKEN}`).then(res => res.json());
        location = `${geo.city}, ${geo.country}`;
    } catch (err) {
        location = 'Unknown';
    }

    console.log({
        ip,
        location,
        browser: ua.browser.name,
        os: ua.os.name,
        device: ua.device.vendor || 'Unknown',
    });

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