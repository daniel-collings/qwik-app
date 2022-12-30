import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section class="container mx-auto flex flex-wrap">
          <Slot />
        </section>
      </main>
      <footer>
        <a href="https://www.builder.io/" target="_blank">
          Developed by DC
        </a>
      </footer>
    </>
  );
});
