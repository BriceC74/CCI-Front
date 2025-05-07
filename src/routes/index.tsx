import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="flex min-h-screen items-center justify-center">
      <div class="grid w-full max-w-4xl grid-cols-2 gap-8">
        <div class="col-span-2 rounded-lg border border-gray-300 p-8 shadow-lg backdrop-blur-lg">
          <h1 class="mb-4 text-center text-4xl font-bold">
            Welcome to Our Game Launch
          </h1>
          <p class="mb-8 text-center text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="rounded-lg border border-gray-300 p-6 shadow-md backdrop-blur-md">
          <h2 class="mb-4 text-2xl font-semibold">About the Game</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div class="rounded-lg border border-gray-300 p-6 shadow-md backdrop-blur-md">
          <h2 class="mb-4 text-2xl font-semibold">Features</h2>
          <ul class="list-inside list-disc">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipiscing elit</li>
            <li>Sed do eiusmod tempor incididunt</li>
            <li>Ut labore et dolore magna aliqua</li>
          </ul>
        </div>
        <div class="col-span-2 mt-8 text-center">
          <button class="btn btn-primary">Play Now</button>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Our Game Launch",
  meta: [
    {
      name: "description",
      content:
        "Join us for the launch of our exciting new game built with Unity and WebAssembly.",
    },
  ],
};
