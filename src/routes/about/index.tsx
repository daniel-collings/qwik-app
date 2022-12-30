import { component$ } from '@builder.io/qwik';
import { DocumentHead } from '@builder.io/qwik-city';
// import styles from './about.css?inline';

export default component$(() => {
//   useStylesScoped$(styles);

  return (
    <>
        <h1>About</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Qwik About',
};
