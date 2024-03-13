import { z } from "zod";
import { contactSchema, contactSchemaRequest, contactSchemaResponse } from "../schemas/contacts.schema";
import { DeepPartial } from "typeorm";

type TContactRequest = z.infer<typeof contactSchemaRequest>;
type TContact = z.infer<typeof contactSchema>;
type TContactResponse = z.infer<typeof contactSchema>;
type TContactsResponse = z.infer<typeof contactSchemaResponse>;

type TContactUpdateRequest = DeepPartial<TContactRequest>;

export { TContact, TContactRequest, TContactResponse, TContactUpdateRequest, TContactsResponse };
