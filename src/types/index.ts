import { SanityDocument } from '@sanity/client';

export type Slug = {
  readonly current: string;
  readonly _type: string;
};

export interface BaseEvent extends SanityDocument {
  readonly name: string;
  readonly price: number;
}
export interface IEvent extends BaseEvent {
  readonly description: string;
  readonly slug: Slug;
  readonly thumbnail_image: string;
}

export type EventRepo = {
  _id: string;
  name: string;
  description: string;
  long_description: string;
  main_image: string;
};

export type EventCart = {
  id: string;
  units: number;
};

export type Inputs = {
  Nombre: string;
  Apellidos: string;
  Email: string;
  Telefono: string;
  Terminos: string;
};

export interface ContactInputs extends Inputs {
  Consulta: string;
}
