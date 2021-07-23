import { ConnectionOptions } from "typeorm";
import * as dotenv from "dotenv";
dotenv.config();
import { Area } from "../models";
import { Bus } from "../models";
import { Equipment } from "../models";
import { Operation } from "../models";
import { Subarea } from "../models";
import { Ubication } from "../models";
import { User } from "../models";
import { Zone } from "../models";
import { Notification } from "../models";
import {Field} from "../models";
import {Section} from "../models";

dotenv.config();

const config: ConnectionOptions = {
  type: "mssql",
  host: process.env.MSSQL_HOST || "localhost",
  port: Number(process.env.MSSQL_PORT) || 5432,
  username: process.env.MSSQL_USER || "admin",
  password: process.env.MSSQL_PASSWORD || "1234",
  database: process.env.MSSQL_DB || "fixmaint",
  entities: [User, Zone, Bus, Ubication, Subarea, Operation, Equipment, Area, Notification, Field, Section],
  synchronize: true,
};

export default config;
