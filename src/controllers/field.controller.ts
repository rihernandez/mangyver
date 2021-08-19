import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Field} from '../models'
import {getField, createField, IFieldPayload, getFields} from '../repositories/field.repository'

@Route("fields")
@Tags("Field")
export default class FieldController {
  @Get("/")
  public async getFields(): Promise<Array<Field>> {
    return getFields();
  }

  @Post("/")
  public async createField(@Body() body: IFieldPayload): Promise<Field> {
    return createField(body)
  }

  @Get("/:id")
  public async getField(@Path() id: string): Promise<Field | null> {
    return getField(id)
  }
}