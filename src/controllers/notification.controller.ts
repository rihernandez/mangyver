/* eslint-disable */
import { Get, Route, Tags, Post, Body, Path } from "tsoa";
import { Notification } from "../models";
import {
  getNotifications,
  createNotification,
  INotificationPayload,
  getNotification,
} from "../repositories/notification.repository";

@Route("notifications")
@Tags("Notification")
export default class NotificationController {
  @Get("/")
  public async getNotifications(): Promise<Array<Notification>> {
    return getNotifications();
  }

  @Post("/")
  public async createNotification(
    @Body() body: INotificationPayload
  ): Promise<Notification> {
    return createNotification(body);
  }

  @Get("/:id")
  public async getNotification(
    @Path() id: string
  ): Promise<Notification | null> {
    return getNotification(id);
  }
}
/* eslint-disable */
