import { Request, Response } from "express";
import { UserService } from "../services/users.services";
import { TUserRequest, TUserUpdateRequest } from "../interfaces/users.interfaces";

class UsersController {
  constructor(private userService: UserService) {}
  async create(req: Request, res: Response) {
    const { fullname, email, password, phone }: TUserRequest = req.body;
    const newUser = await this.userService.create({ fullname, email, password, phone });
    return res.status(201).json(newUser);
  }

  async list(_: Request, res: Response) {
    const users = await this.userService.list();
    return res.json(users);
  }

  async retrieve(req: Request, res: Response) {
    const userId = req.params.id;
    const users = await this.userService.listId(userId);
    return res.json(users);
  }

  async update(req: Request, res: Response) {
    const updatedValues: TUserUpdateRequest = req.body;
    const userId = req.params.id;

    const updateUser = await this.userService.update(updatedValues, userId);

    return res.json(updateUser);
  }

  async remove(req: Request, res: Response) {
    const userId = req.params.id;
    await this.userService.remove(userId);

    res.status(204).send();
  }
}

export { UsersController };
