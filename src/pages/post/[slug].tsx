import React from 'react';

import { Section } from '../../layout/Section';
import client from '../../sanity/client';
import { Footer } from '../../templates/Footer';

const Post = ({ article }: { article: any }) => {
  // console.log(article);
  return (
    <>
      <Section title={article?.title}>
        <article>
          <h1>{article?.title}</h1>
          <span>{article?.name}</span>
        </article>
      </Section>
      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type == "article" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug: any) => ({ params: { slug } })),
    fallback: true,
  };
}

export async function getStaticProps(context: any) {
  // It's important to default the slug so that it doesn't return "undefined"
  const { slug = '' } = context.params;
  const article = await client.fetch(
    `
    *[_type == "article" && slug.current == $slug][0]{title, "name": author -> name}
  `,
    { slug }
  );
  return {
    props: {
      article,
    },
  };
}

export default Post;
