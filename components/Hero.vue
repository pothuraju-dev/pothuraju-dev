<template>
  <div class="relative isolate overflow-hidden bg-white">
    <Nav />

    <div
      class="relative isolate overflow-hidden bg-gradient-to-b dark:bg-gray-900 from-indigo-100/20 pt-4"
    >
      <h1
        class="mx-auto max-w-4xl pt-24 text-center text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl"
      >
        <span class="text-red-600">Hello, World!</span> I am Pothuraju Sri Ram
      </h1>
      <div
        class="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white dark:bg-gray-900 shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:-mr-80 lg:-mr-96"
        aria-hidden="true"
      />
      <div class="mx-auto max-w-7xl px-6 py-4 sm:py-8 lg:px-8">
        <div
          class="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8"
        >
          <div class="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
            <h1
              class="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:col-span-2 xl:col-auto lg:mt-24"
            >
              Software Engineer
            </h1>
            <p class="text-lg leading-8 text-gray-600 dark:text-gray-400">
              A full-stack developer located in Hyderabad, India. Turning challenges into
              oportunities through technology.
            </p>
          </div>
          <img
            src="/profile.jpeg"
            alt=""
            class="rounded-3xl lg:w-96 lg:h-96 md:w-96 md:h-96 w-72 h-72 lg:max-w-none max-w-lg object-cover xl:row-end-2 xl:row-span-2 my-8"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronRightIcon } from "@heroicons/vue/20/solid";
</script>
