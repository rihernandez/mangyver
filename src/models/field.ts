/*

		field: {
			fieldType: 'select',
			label : 'Oficinas',
			optionsEndpoint: 'https://endpoing.com',
			validations: ['required'],
			childfield : {
				id: '',
				toMatch: 'asasd',
				fieldType: 'select',
				label : 'Número de telefono',
				optionsEndpoint: 'https://endpoing.com',
				validations: ['required'],
			}

*/

import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne
  } from "typeorm";
import { Section } from "./section";
  

  // export enum FieldType {
  //   select = "select",
  //   input = "Input",
  //   radiobutton = "RadioButton",
  //   textarea = "TextArea",
  // }

  export interface Ichildfield{
    id: number,
    toMatch: string,
    fieldType: string,
    label : string,
    optionsEndpoint: string,
    validations: string[]
  }


  @Entity("Field")
  export class Field {
    @Column({ name: "ID" })
    @PrimaryGeneratedColumn("uuid")
    id!: string;
  
    @Column({ name: "FieldType" })
    fieldType!: string;

    @Column({ name: "Label" })
    label!: string;
  
    @Column({  name: "OptionsEndpoint" })
    optionsEndpoint!: string;
  
    @Column({ name: "Validations" })
    validations!:string;

    @Column({ name: "Childfield" })
    childfield!: string;


  }
