import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'o7iw3v1c', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-08-21',
  token:
    'skeQ9E6NEL1JBRb1JLl7yGgzqQJLw0YieuzPQ2PBww4MsAxSzGu3H5z8EQiqD5CWF34g14wmqnVLc2uil3At3PBOeuPuegl7nevfTZBgLsPkPTMaMbR1ZmdQnezPBFHnZs60lbqWCgCOBZJEnhSKkVayoRdJ6fMYIpaBUTmBrgVuw9TaTYBw',
});
