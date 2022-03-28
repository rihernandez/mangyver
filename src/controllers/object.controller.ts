/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path, Query } from "tsoa";
import {
  getObjectParts,
  getObjectPart,
  createObjectParts,
  IObjectPartsPayload,
} from "../repositories/object.repository";
import { ObjectParts } from "../models";
@Route("objects")
@Tags("Object")
export default class ObjectPartsController {
  @Get("/")
  public async getObjectParts(
    @Query() groupCode?: string
  ): Promise<Array<ObjectParts>> {
    return getObjectParts(groupCode);
  }

  @Post("/")
  public async createObjectParts(
    @Body() body: IObjectPartsPayload
  ): Promise<ObjectParts> {
    return createObjectParts(body);
  }

  @Get("/:id")
  public async getObjectPart(@Path() id: string): Promise<ObjectParts | null> {
    return getObjectPart(id);
  }
}
/* eslint-disable */
