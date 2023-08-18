import { SanityDocument } from '@sanity/client';

export interface IEvent extends SanityDocument {
  readonly name: string;
  readonly description: string;
}
