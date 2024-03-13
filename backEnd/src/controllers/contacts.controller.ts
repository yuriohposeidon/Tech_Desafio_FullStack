import { Request, Response } from "express";
import { ContactsService } from "../services/contacts.services";
import { TContactUpdateRequest } from "../interfaces/contacts.interfaces";

export class ContactsController {
  constructor(private contactsService: ContactsService) {}

  async create(req: Request, res: Response) {
    const userId = res.locals.userId;

    const newContact = await this.contactsService.create(req.body, userId);

    return res.status(201).json(newContact);
  }

  async list(req: Request, res: Response) {
    const userId = res.locals.userId;

    const contacts = await this.contactsService.list(userId);

    return res.json(contacts);
  }

  async retrieve(req: Request, res: Response) {
    const contactId = req.params.id;
    const contacts = await this.contactsService.listId(contactId);
    return res.json(contacts);
  }

  async update(req: Request, res: Response) {
    const updatedValues: TContactUpdateRequest = req.body;
    const contactId = req.params.id;

    const updateContact = await this.contactsService.update(updatedValues, contactId);

    return res.json(updateContact);
  }

  async remove(req: Request, res: Response) {
    const contactId = req.params.id;
    await this.contactsService.remove(contactId);

    res.status(204).send();
  }
}
