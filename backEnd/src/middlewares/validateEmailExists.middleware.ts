import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";

const validateEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userRepository = AppDataSource.getRepository(User);

  const { email } = req.body;

  const result = await userRepository.findOne({ where: { email: email }, withDeleted:true });

  if (result) {
    throw new AppError("Email already registered", 409);
  }

  return next();
};

export default validateEmailExists;
