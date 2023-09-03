import { SanityDocument } from '@sanity/client';

export type Slug = {
  readonly current: string;
  readonly _type: string;
};
export interface IEvent extends SanityDocument {
  readonly name: string;
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
