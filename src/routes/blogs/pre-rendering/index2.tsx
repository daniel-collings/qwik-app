import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const location = useLocation();

  return (
    <div>
      <h1>title</h1>
      <p>Pathname: {location.pathname}</p>
      <p>Sku Id: {location.params.skuId}</p>
    </div>
  );
});