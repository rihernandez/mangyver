import { Get, Route, Tags,  Post, Body, Path, Put } from "tsoa";
import {Card} from '../models'
import {getCards, createCard, ICardPayload, getCard} from '../repositories/card.repository'

@Route("cards")
@Tags("Card")
export default class CardController {
  @Get("/")
  public async getCards(): Promise<Array<Card>> {
    return getCards()
  }

  @Post("/")
  public async createCard(@Body() body: ICardPayload): Promise<Card> {
    return createCard(body)
  }

  @Get("/:id")
  public async getCard(@Path() id: string): Promise<Card | null> {
    return getCard(id)
  }
}
