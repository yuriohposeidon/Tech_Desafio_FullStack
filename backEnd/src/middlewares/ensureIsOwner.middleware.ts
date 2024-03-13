import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Contact } from "../entities/contact.entitie";
import { AppError } from "../errors/AppError";

export const EnsureIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contactId = req.params.id;
  const userId = res.locals.userId;

  const contact = await contactRepository.findOne({
    where: {
      id: contactId,
    },
    relations: {
      user: true,
    },
  });

  if (!contact) {
    throw new AppError("contact not found", 404);
  }

  if (contact.user.id !== userId) {
    throw new AppError("You don`t have permission", 403);
  }

  return next();
};
