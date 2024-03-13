import { compare } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";
import { AppError } from "../errors/AppError";
import { TLoginRequest } from "../interfaces/login.interfaces";
import { sign } from "jsonwebtoken";
import "dotenv/config";

export class SessionService {
  async create({ email, password }: TLoginRequest) {
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOne({
      where: {
        email,
      },
    });

    if (!findUser) {
      throw new AppError("Invalid credentials", 401);
    }

    const passwordMatch = await compare(password, findUser.password);

    if (!passwordMatch) {
      throw new AppError("Invalid credentials", 401);
    }

    const token = sign({ userName: findUser.fullname }, process.env.SECRET_KEY!, {
      expiresIn: "1h",
      subject: findUser.id,
    });

    return {
      token,
      user: {
        id: findUser.id,
        email: findUser.email,
        fullname: findUser.fullname,
        phone: findUser.phone,
      },
    };
  }
}
