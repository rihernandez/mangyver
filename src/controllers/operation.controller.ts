/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Operation } from "../models";
import {
  getOperation,
  getOperations,
  createOperation,
  IOperationPayload,
} from "../repositories/operation.repository";

@Route("operations")
@Tags("Operation")
export default class OperationController {
  @Get("/")
  public async getOperations(): Promise<Array<Operation>> {
    return getOperations();
  }

  @Post("/")
  public async createOperation(
    @Body() body: IOperationPayload
  ): Promise<Operation> {
    return createOperation(body);
  }

  @Get("/:id")
  public async getOperation(@Path() id: string): Promise<Operation | null> {
    return getOperation(id);
  }
}
/* eslint-disable */
