import { hash } from "bcryptjs";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entitie";
import { TUserRequest, TUserResponse, TUserUpdateRequest } from "../interfaces/users.interfaces";
import { userSchema, userSchemaResponse, usersSchemaResponse } from "../schemas/users.schema";
import { AppError } from "../errors/AppError";

export class UserService {
  async create(data: TUserRequest): Promise<TUserResponse> {
    const { fullname, email, password, phone } = data;
    const userRepository = AppDataSource.getRepository(User);
    const findUser = await userRepository.findOne({
      where: {
        email,
      },
    });

    if (findUser) {
      throw new AppError("User already exists", 409);
    }


    const user = userRepository.create({
      fullname,
      email,
      password,
      phone,
    });

    await userRepository.save(user);
    return userSchemaResponse.parse(user);
  }

  async list() {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();

    return usersSchemaResponse.parse(users);
  }

  async listId(userId: string) {
    const userRepository = AppDataSource.getRepository(User);

    const user = await userRepository.findOneBy({ id: userId });

    if (!user) {
      throw new Error("User not found");
    }
    return userSchema.parse(user);
  }

  async update(data: TUserUpdateRequest, userId: string): Promise<TUserResponse> {
    const userRepository = AppDataSource.getRepository(User);
    const oldUser = await userRepository.findOneBy({ id: userId });
    if (!oldUser) {
      throw new AppError("User not found", 404);
    }

    const newUserData = userRepository.create({
      ...oldUser,
      ...data,
    });

    await userRepository.save(newUserData);

    return userSchema.parse(newUserData);
  }

  async remove(userId: string): Promise<void> {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: userId });

    if (!user) {
      throw new AppError("User not found", 404);
    }

    await userRepository.softRemove(user);
  }
}
