/* eslint-disable */
import { Process } from "./process";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  JoinColumn,
  Generated,
} from "typeorm";
import { Card } from "./card";
import { Affect } from "./affect";
import { Breakdown } from "./breakdown";
import { Component } from "./component";
import { Consecutive } from "./consecutive";
import { Line } from "./line";
import { Priority } from "./priority";
import { TypeFail } from "./typefail";
import { Equipment } from "./equipment";
import { User } from "./user";
import { LineMachine } from "./line-machine";
import { Operation } from "./operation";
import { Symptom } from "./symptom";
import { Cause } from "./cause";
import { ObjectParts } from "./object";

@Entity("Notice")
export class Notice {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
  @Column({ name: "numNotice" })
  @Generated("increment")
  numNotice?: number;
  @Column({ name: "otCode", nullable: true })
  otCode!: string;
  @Column({ name: "didCard", nullable: true })
  didCard!: string;
  @Column({ name: "failureTime", nullable: true })
  failureTime!: string;
  @Column({ name: "departmentId", nullable: true })
  departmentId!: string;
  // @Column({name: "equipmentCode", nullable: true})
  // equipmentCode!: string;
  @ManyToOne(type => Line, line => line.id, { nullable: true })
  @JoinColumn({ name: "lineId" })
  lineId!: Line;
  // @Column({name: "Equipment", nullable: true})
  // equipmentType!: string;
  // @ManyToOne(type => Consecutive, cn => cn.id, {nullable: true})
  // consecutive!: Consecutive;
  @ManyToOne(type => Card, card => card.id, { nullable: true })
  @JoinColumn({ name: "cardTypeId" })
  cardTypeId!: Card;
  @Column({ name: "cardTitle", nullable: true })
  cardTitle!: string;
  @ManyToOne(type => Priority, priority => priority.id, { nullable: true })
  @JoinColumn({ name: "priorityId" })
  priorityId!: Priority;
  @ManyToOne(type => Component, cp => cp.id, { nullable: true })
  @JoinColumn({ name: "componentsId" })
  componentsId!: Component;
  @ManyToOne(type => Breakdown, bdwn => bdwn.id, { nullable: true })
  @JoinColumn({ name: "breakdownId" })
  breakdownId!: Breakdown;
  @ManyToOne(type => TypeFail, tp => tp.id, { nullable: true })
  @JoinColumn({ name: "failureTypeId" })
  failureTypeId!: TypeFail;
  @ManyToOne(type => Affect, affect => affect.id, { nullable: true })
  @JoinColumn({ name: "affectsId" })
  affectsId!: Affect;
  @Column({ name: "affectsFile", nullable: true })
  affectsFile!: string;
  @Column({ name: "cardDescription", nullable: true })
  cardDescription!: string;
  @ManyToOne(type => Process, process => process.id, { nullable: true })
  @JoinColumn({ name: "processId" })
  processId!: Process;
  @ManyToOne(type => User, user => user.id, { nullable: true })
  user!: User;
  @Column({ name: "SapId", nullable: true })
  sapId!: string;
  @ManyToOne(type => LineMachine, lineMachine => lineMachine.id, {
    nullable: true,
  })
  @JoinColumn({ name: "equipmentId" })
  equipmentId!: LineMachine;
  @ManyToOne(type => Operation, operation => operation.id, {
    nullable: true,
  })
  @JoinColumn({ name: "operationId" })
  operation!: Operation;

  @ManyToOne(type => ObjectParts, object => object.id, { nullable: true })
  @JoinColumn({ name: "objectId" })
  objectId!: String;

  @ManyToOne(type => Cause, cause => cause.id, { nullable: true })
  @JoinColumn({ name: "causeId" })
  causeId!: String;

  @ManyToOne(type => Symptom, symptom => symptom.id, { nullable: true })
  @JoinColumn({ name: "symptomId" })
  symptomId!: String;

  @Column({ name: "textCause", nullable: true })
  textCause!: string;

  @Column({ name: "textSymptom", nullable: true })
  textSymptom!: string;

  // @Column({ name: "Type" })
  // type!: string;
  // @Column({ name: "Order" })
  // order!: number;
  // @Column({ name: "Ubication" })
  // ubication!: string;
  // @Column({ name: "Equipment" })
  // equipment!: string;
  // @Column({ name: "Analysis" })
  // analysis!: string;
  // @Column({ name: "Description" })
  // description!: string;
  // @Column({ name: "User" })
  // user!: number;
  // @Column({ name: "Priority", length: 300 })
  // priority!: string;
  @Column({ name: "Status", default: true })
  isActive!: boolean;
  @CreateDateColumn()
  created!: Date;
}
/* eslint-disable */
