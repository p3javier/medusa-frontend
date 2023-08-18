/* eslint-disable no-underscore-dangle */
import { SanityDocument, createClient } from '@sanity/client';

import { sanityConfig } from './config';

export const sanityClient = createClient({
  ...sanityConfig,
  token: process.env.SANITY_API_READ_TOKEN,
});

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN,
});

export const getClient = (preview: boolean) =>
  preview ? previewClient : sanityClient;

export function overlayDrafts(docs: SanityDocument[]) {
  const documents = docs || [];
  const overlayed = documents.reduce((map, doc: SanityDocument) => {
    if (!doc._id) {
      throw new Error('Ensure that `_id` is included in query projection');
    }

    const isDraft = doc._id.startsWith('drafts.');
    const id = isDraft ? doc._id.slice(7) : doc._id;
    return isDraft || !map.has(id) ? map.set(id, doc) : map;
  }, new Map());

  return Array.from(overlayed.values());
}
