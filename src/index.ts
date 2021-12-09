/* eslint-disable */
import "reflect-metadata";
import { createConnection } from "typeorm";
import express, { Application } from "express";
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";
import * as dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { Logger } from "tslog";
import { log } from "./config/logger";
import sanitizer from "sanitizer";

import Router, { initRoute, metadata } from "./routes";
import dbConfig from "./config/database";

export default class App {
  app: Application;

  constructor(private port?: number) {
    this.app = express();
    this.settings();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(cors());
    // this.app.use(helmet());
    this.app.use(morgan("dev"));
    this.app.use(express.static("public"));
    this.app.use(express.json());
    this.app.use(
      `${process.env.API_VERSION}/docs`,
      swaggerUi.serve,
      swaggerUi.setup(undefined, {
        swaggerOptions: {
          url: "/swagger.json",
        },
      })
    );
  }

  private async settings() {
    dotenv.config();
    createConnection(dbConfig)
      .then(_connection => {
        log.info("Database connected:", _connection.isConnected);
        this.app.listen(process.env.PORT || this.port, () => {
          log.info("Server is running on port:", process.env.PORT || this.port);
        });
      })
      .catch(err => {
        log.error("Unable to connect to db", err);
        process.exit(1);
      });
  }

  private routes() {
    this.app.use(initRoute);
    this.app.use(metadata);
    this.app.use(`${process.env.API_VERSION}`, Router);
  }
}

const app = new App();
