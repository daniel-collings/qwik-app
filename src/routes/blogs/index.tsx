import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
import Card from '~/components/card/card';
// import styles from './about.css?inline';

export default component$(() => {
  //   useStylesScoped$(styles);
  const blogs = [
    {
      id: 'pre-rendering',
      title: 'Pre Rendering',
      snippet: 'We’d like to create a blog (here’s the desired result), but so far we’ve added no blog content.',
      image: 'http://127.0.0.1:5173/images/tree.webp',
      tags: [ 'optimisation', 'tech' ]
    },
    {
      id: 'ssg-ssr',
      title: 'SSG vs SSR',
      snippet: 'SSR and SSG both improve the loading time when compared to rendering on the client-side. ',
      image: 'http://127.0.0.1:5173/images/moutain.webp',
      tags: [ 'optimisation', 'tech', 'ssg', 'ssr' ]
    }
  ]

  return (
    <>
      <h1>Blogs</h1>
      <div class='flex flex-wrap justify-evenly'>
        {blogs.map((o) => (
          <Card {...o}/>
        ))}
      </div>

    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik About',
};
