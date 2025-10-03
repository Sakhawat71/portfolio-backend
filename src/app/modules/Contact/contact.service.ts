import prisma from "../../utils/prisma";
import { IContact } from "./contact.interface";


const createContact = async (payload: IContact) => {
    const result = await prisma.contact.create({
        data: payload,
    });
    return result;
};

const getAllContacts = async () => {
    const result = await prisma.contact.findMany();
    const total = await prisma.contact.count();
    return {
        meta: {
            total
        },
        data: result,
    };
};

const getContactById = async (id: string) => {
    const contact = await prisma.contact.findUnique({
        where: {
            id,
        },
    });
    if (!contact) {
        throw new Error("Contact not found");
    }
    return contact;
};

const deleteContact = async (id: string) => {
    const result = await prisma.contact.delete({
        where: {
            id,
        }
    });
    return result;
};



export const ContactService = {
    createContact,
    getAllContacts,
    getContactById,
    deleteContact,
};