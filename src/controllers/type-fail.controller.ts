/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { TypeFail } from "../models";
import {
  getTypeFails,
  createTypeFail,
  ITypeFailPayload,
  getTypeFail,
} from "../repositories/type-fail.repository";

@Route("type-fails")
@Tags("TypeFail")
export default class TypeFailController {
  @Get("/")
  public async getTypeFails(): Promise<Array<TypeFail>> {
    return getTypeFails();
  }

  @Post("/")
  public async createTypeFail(
    @Body() body: ITypeFailPayload
  ): Promise<TypeFail> {
    return createTypeFail(body);
  }

  @Get("/:id")
  public async getTypeFail(@Path() id: string): Promise<TypeFail | null> {
    return getTypeFail(id);
  }
}
/* eslint-disable */
