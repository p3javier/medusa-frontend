export const eventsQuery = `*[_type == 'event'] {
  ...,
  'thumbnail_image': thumbnail_image.asset->url
}`;
