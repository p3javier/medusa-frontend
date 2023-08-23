import { SanityDocument } from '@sanity/client';

export interface IEvent extends SanityDocument {
  readonly name: string;
  readonly description: string;
}

export type EventRepo = {
  _id: string;
  name: string;
  description: string;
  long_description: string;
  main_image: string;
};
