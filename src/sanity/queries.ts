export const eventsQuery = `*[_type == 'event'] {
  ...,
  'thumbnail_image': thumbnail_image.asset->url
}`;

export const eventSlugsQuery = `
*[_type == "event" && defined(slug.current)][].slug.current
`;

export const eventBySlugQuery = `
*[_type == "event" && slug.current == $slug][0] {
  _id,
  name,
  description,
  long_description,
  'main_image': main_image.asset->url
}
`;

export const cartEventsQuery = `
*[_type == "event"] {
  _id,
  name,
  price
}
`;
