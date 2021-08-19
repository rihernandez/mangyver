import { Get, Route, Tags,  Post, Body, Path } from "tsoa";
import {Section} from '../models'
import {getSection, createSection, ISectionPayload, getSections} from '../repositories/section.repository'

@Route("sections")
@Tags("Section")
export default class SectionController {
  @Get("/")
  public async getSections(): Promise<Array<Section>> {
    return getSections();
  }

  @Post("/")
  public async createSection(@Body() body: ISectionPayload): Promise<Section> {
    return createSection(body)
  }

  @Get("/:id")
  public async getSection(@Path() id: string): Promise<Section | null> {
    return getSection(id)
  }
}