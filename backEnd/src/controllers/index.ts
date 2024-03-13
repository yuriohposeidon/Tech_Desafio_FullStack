import { SessionService } from "../services/session.services";
import { UserService } from "../services/users.services";
import { SessionController } from "./session.controller";
import { UsersController } from "./users.controller";
import { ContactsController } from "./contacts.controller";
import { ContactsService } from "../services/contacts.services";

const userService = new UserService();
const usersController = new UsersController(userService);
const sessionService = new SessionService();
const sessionController = new SessionController(sessionService);
const contactsService = new ContactsService();
const contactsController = new ContactsController(contactsService);

export { usersController, sessionController, contactsController };
