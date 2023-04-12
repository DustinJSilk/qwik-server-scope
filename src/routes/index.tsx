import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { server$ } from "@builder.io/qwik-city";

const serverFunc = server$(function () {
  console.log("`this` should exist: ", this);
  return "";
});

export default component$(() => {
  const resource = useResource$(async function () {
    await serverFunc();
  });

  return (
    <div>
      <button onClick$={() => serverFunc()}>Try me</button>
      <Resource value={resource} onResolved={() => <div></div>} />
    </div>
  );
});
