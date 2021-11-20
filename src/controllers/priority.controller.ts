/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Priority } from "../models";
import {
  getPrioritys,
  createPriority,
  IPriorityPayload,
  getPriority,
} from "../repositories/priority.repository";

@Route("priorities")
@Tags("Priority")
export default class PriorityController {
  @Get("/")
  public async getPriorities(): Promise<Array<Priority>> {
    return getPrioritys();
  }

  @Post("/")
  public async createPriority(
    @Body() body: IPriorityPayload
  ): Promise<Priority> {
    return createPriority(body);
  }

  @Get("/:id")
  public async getPriority(@Path() id: string): Promise<Priority | null> {
    return getPriority(id);
  }
}
/* eslint-disable */
