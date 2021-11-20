/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path, Query } from "tsoa";
import { OperationNumber } from "../models";
import {
  getOperationNumbers,
  createOperationNumber,
  IOperationNumberPayload,
  getOperationNumber,
} from "../repositories/operation-number.repository";

@Route("operation-number")
@Tags("OperationNumber")
export default class OperationNumberController {
  @Get("/")
  public async getOperationNumbers(
    @Query() operation?: string
  ): Promise<Array<OperationNumber>> {
    return getOperationNumbers(operation);
  }

  @Post("/")
  public async createOperationNumber(
    @Body() body: IOperationNumberPayload
  ): Promise<OperationNumber> {
    return createOperationNumber(body);
  }

  @Get("/:id")
  public async getOperationNumber(
    @Path() id: string
  ): Promise<OperationNumber | null> {
    return getOperationNumber(id);
  }
}
/* eslint-disable */
