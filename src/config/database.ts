/* eslint-disable */
import { Notification } from "./../models/notification";
import { OperationNumber } from "./../models/operation-number";
import { Deviation } from "./../models/deviation";
import { Help, Menu, MenuRole, SubAreaMachine } from "../models";
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
import { Field } from "../models";
import { Section } from "../models";
import { Card } from "../models";
import { Component } from "../models";
import { Consecutive } from "../models";
import { Line } from "../models";
import { LineMachine } from "../models";
import { Priority } from "../models";
import { ProcessType } from "../models";
import { TypeFail } from "../models";
import { Process } from "../models";
import { Affect } from "../models";
import { Breakdown } from "../models";
import { Notice } from "../models";
import { Role } from "../models";
import { Session } from "../models";
import { SapLog } from "../models";
import { SapLogNotification } from "../models";
import { Form } from "../models";

dotenv.config();

const config: ConnectionOptions = {
  type: "mssql",
  host: process.env.MSSQL_HOST || process.env.DB_HOST,
  port: Number(process.env.MSSQL_PORT) || Number(process.env.DB_PORT),
  username: process.env.MSSQL_USER || process.env.DB_USER,
  password: process.env.MSSQL_PASSWORD || process.env.DB_PASSWORD,
  database: process.env.MSSQL_DB || process.env.DB_INSTANCE,
  entities: [
    User,
    Zone,
    Bus,
    Ubication,
    Subarea,
    Operation,
    Equipment,
    Area,
    Field,
    Section,
    Card,
    Component,
    Consecutive,
    Line,
    LineMachine,
    Priority,
    Process,
    ProcessType,
    TypeFail,
    Affect,
    Breakdown,
    Notice,
    Role,
    SubAreaMachine,
    Menu,
    MenuRole,
    Deviation,
    OperationNumber,
    Notification,
    Session,
    SapLog,
    SapLogNotification,
    Form,
    Help
  ],
  synchronize: true,
};

export default config;
