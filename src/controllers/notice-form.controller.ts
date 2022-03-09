/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path, Query } from "tsoa";
import { getForm } from "../repositories/notice-form";

@Route("fnmobile")
@Tags("Process")
export default class FormController {
  @Get("/")
  public async getForm(@Query() profile?: string) {
    return getForm(profile);
  }
}
