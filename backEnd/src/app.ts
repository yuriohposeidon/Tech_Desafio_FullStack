import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { usersRoutes } from "./routes/users.routes";
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware";
import { sessionRouter } from "./routes/session.routes";
import { contactsRoutes } from "./routes/contacts.routes";
import cors from "cors"

const app = express();

app.use(cors())

app.use(express.json());
app.use("/users", usersRoutes);
app.use("/login", sessionRouter);
app.use("/contacts", contactsRoutes);

app.use(handleAppErrorMiddleware);

export default app;
