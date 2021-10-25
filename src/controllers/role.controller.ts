import { getRoles, getRole, updateRoleStatus, createRole, IRolePayload } from "../repositories/role.repository";
import { Get, Route, Tags,  Post, Body, Path, Put } from "tsoa";
import {Role} from '../models'

@Route("roles")
@Tags("Role")
export default class RoleController {
  @Get("/")
  public async getRoles(): Promise<Array<Role>> {
    return getRoles()
  }

  @Post("/")
  public async createRole(@Body() body: IRolePayload): Promise<Role> {
    return createRole(body)
  }

  // @Put("/:id")
  // public async updateRoleStatus(@Path() id: string): Promise<Role | null>{
  //   return updateRoleStatus(id)
  // }

  @Get("/:id")
  public async getRole(@Path() id: string): Promise<Role | null> {
    return getRole(id)
  }
}
