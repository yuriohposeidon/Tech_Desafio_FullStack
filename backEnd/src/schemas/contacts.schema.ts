import { z } from "zod";


const contactSchema = z.object({
  id: z.string(),
  fullname: z.string(),
  email: z.string().email(),
  phone: z.string(),
  date: z.string(),
});

const contactSchemaRequest = contactSchema.omit({
  id: true,
  date: true,
});

const contactSchemaResponse = z.array(contactSchema);

const contactSchemaUpdate = contactSchema
  .omit({
    id: true,
  })
  .partial();

export { contactSchema, contactSchemaRequest, contactSchemaUpdate, contactSchemaResponse };
