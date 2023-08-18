// eslint-disable-next-line import/no-extraneous-dependencies
import createImageUrlBuilder from '@sanity/image-url';

import { sanityClient } from './client';

export const imageBuilder = createImageUrlBuilder(sanityClient);

export const urlForImage = (source: string) =>
  imageBuilder.image(source).auto('format').fit('max');
