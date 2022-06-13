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
    @Query() groupCode?: string,
    @Query() from?: number,
    @Query() top?: number,
    @Query() name?: string,
  ): Promise<Array<ObjectParts>> {
    let _from: number = Number(from);
    let _top: number = Number(top);
    if (isNaN(_from && _top)) {
    }
    _from > 0 ? (_from = _from - 1) : _from;
    return getObjectParts(groupCode, _from, _top, name);
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
