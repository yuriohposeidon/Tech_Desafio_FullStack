import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entitie";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/AppError";
import {
  TContactRequest,
  TContactResponse,
  TContactUpdateRequest,
  TContactsResponse,
} from "../interfaces/contacts.interfaces";
import { contactSchema, contactSchemaResponse } from "../schemas/contacts.schema";

export class ContactsService {
  async create(data: TContactRequest, userId: string): Promise<TContactResponse> {
    const contactRepository = AppDataSource.getRepository(Contact);
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOne({
      where: {
        id: userId,
      },
    });
    const email = contactRepository.findOne({where: {email:data.email}})
    if(!email){
      throw new AppError("Email Already exists.", 400);

    }
    if (!user) {
      throw new AppError("User not found", 404);
    }

    const contact: Contact = contactRepository.create({
      ...data,
      user,
    });

    await contactRepository.save(contact);

    return contactSchema.parse(contact);
  }

  async list(userId: string): Promise<TContactsResponse> {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contacts = await contactRepository.find({
      where: {
        user: {
          id: userId,
        },
      },
    });

    return contactSchemaResponse.parse(contacts);
  }

  async listId(contactId: string) {
    const contactRepository = AppDataSource.getRepository(Contact);

    const contact = await contactRepository.findOneBy({ id: contactId });

    if (!contact) {
      throw new Error("Contact not found");
    }
    return contactSchema.parse(contact);
  }

  async update(data: TContactUpdateRequest, contactId: string): Promise<TContactResponse> {
    const contactRepository = AppDataSource.getRepository(Contact);
    const oldContact = await contactRepository.findOneBy({ id: contactId });

    if (!oldContact) {
      throw new AppError("Contact not found", 404);
    }

    const newContactData = contactRepository.create({
      ...oldContact,
      ...data,
    });

    await contactRepository.save(newContactData);

    return contactSchema.parse(newContactData);
  }

  async remove(contactId: string): Promise<void> {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = await contactRepository.findOneBy({ id: contactId });

    if (!contact) {
      throw new AppError("Contact not found", 404);
    }

    await contactRepository.remove(contact);
  }
}