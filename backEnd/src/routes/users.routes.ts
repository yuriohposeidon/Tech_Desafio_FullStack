import { Router } from "express";
import { usersController } from "../controllers";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { userSchemaRequest, userSchemaUpdate } from "../schemas/users.schema";
import { EnsureIsExists } from "../middlewares/ensureIsExist.middleware";
import validateEmailExists from "../middlewares/validateEmailExists.middleware";

const usersRoutes = Router();

  usersRoutes.post("", validateEmailExists, ensureDataIsValidMiddleware(userSchemaRequest), (req, res) =>{
    usersController.create(req, res)}
);
usersRoutes.get("", (req, res) => usersController.list(req, res));

usersRoutes.get("/:id", (req, res) => usersController.retrieve(req, res));
usersRoutes.patch("/:id", EnsureIsExists("User not found"), ensureDataIsValidMiddleware(userSchemaUpdate), (req, res) => usersController.update(req, res))
usersRoutes.delete("/:id", EnsureIsExists("User not found"), (req, res) => usersController.remove(req, res))


export { usersRoutes };
