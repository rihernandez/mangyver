import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Subarea} from '../models'
import {getSubarea, getSubareas, createSubarea, ISubareaPayload} from '../repositories/subarea.repository'

@Route("subareas")
@Tags("Subarea")
export default class SubareaController {
  @Get("/")
  public async getSubareas(): Promise<Array<Subarea>> {
    return getSubareas();
  }

  @Post("/")
  public async createSubarea(@Body() body: ISubareaPayload): Promise<Subarea> {
    return createSubarea(body)
  }

  @Get("/:id")
  public async getSubarea(@Path() id: string): Promise<Subarea | null> {
    return getSubarea(id)
  }
}