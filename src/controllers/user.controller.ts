/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path, Put, Query } from "tsoa";
import { User } from "../models";
import {
  getUsers,
  createUser,
  IUserPayload,
  getUser,
  updateUserStatus,
} from "../repositories/user.repository";

@Route("users")
@Tags("User")
export default class UserController {
  @Get("/")
  public async getUsers(
    @Query() profile?: string,
    @Query() skip?: number,
    @Query() take?: number
  ): Promise<Array<User>> {
    return getUsers(profile, skip, take);
  }

  @Post("/")
  public async createUser(@Body() body: IUserPayload): Promise<User> {
    const user = new User();
    user.name = body.name;
    user.username = body.username;
    user.password = body.password;
    user.email = body.email;
    user.role = body.role;
    user.isActive = body.isActive;
    user.SAPCode = body.SAPCode;
    user.SAPUser = body.SAPUser;
    user.operation = body.operation;
    user.area = body.area;
    user.line = body.line;
    user.hashPassword();
    return createUser(user);
  }

  @Put("/:id")
  public async updateUserStatus(
    @Path() id: string,
    @Query() status: unknown
  ): Promise<User | null> {
    return updateUserStatus(id, String(status));
  }

  @Get("/:id")
  public async getUser(@Path() id: string): Promise<User | null> {
    return getUser(id);
  }
}
/* eslint-disable */
