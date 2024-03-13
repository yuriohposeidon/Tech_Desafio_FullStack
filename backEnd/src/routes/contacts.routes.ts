import { Router } from "express";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schema";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { EnsureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";
import { contactsController } from "../controllers";
import { EnsureIsExists } from "../middlewares/ensureIsExist.middleware";


const contactsRoutes = Router()

contactsRoutes.use(ensureAuthMiddleware)

contactsRoutes.post("", ensureDataIsValidMiddleware(contactSchemaRequest), (req, res) => contactsController.create(req, res))
contactsRoutes.get("", EnsureIsExists("User not exists"), (req, res) => contactsController.list(req, res))
contactsRoutes.get("/:id", (req, res) => contactsController.retrieve(req, res));
contactsRoutes.patch("/:id", EnsureIsOwnerMiddleware, ensureDataIsValidMiddleware(contactSchemaUpdate), (req, res) => contactsController.update(req, res))
contactsRoutes.delete("/:id", EnsureIsOwnerMiddleware, (req, res) => contactsController.remove(req, res))

export { contactsRoutes }