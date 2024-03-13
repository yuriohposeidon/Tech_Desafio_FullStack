import { z } from "zod";

const userSchema = z.object({
  id: z.string(),
  fullname: z.string(),
  email: z.string().email(),
  password: z.string(),
  phone: z.string(),
  date: z.string(),
  deletedAt: z.string().nullish(),
});

const userSchemaRequest = userSchema.omit({
  id: true,
  date: true,
  deletedAt: true,
});

const userSchemaResponse = userSchema.omit({
  password: true,
});

const usersSchemaResponse = z.array(userSchemaResponse);

const userSchemaUpdate = userSchema
  .omit({
    id: true,
  })
  .partial();

export { userSchema, userSchemaRequest, userSchemaResponse, usersSchemaResponse, userSchemaUpdate };
