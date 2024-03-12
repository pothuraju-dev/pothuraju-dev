<template>
  <div>
    <Switch
      v-model="enabled"
      v-if="enabled !== null"
      @click="toggleTheme"
      :class="enabled ? 'bg-orange-50' : 'bg-gray-900'"
      class="relative inline-flex h-[24px] w-[52px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
    >
      <span class="sr-only">Mode setting</span>
      <span
        aria-hidden="true"
        :class="enabled ? 'translate-x-7' : 'translate-x-0'"
        class="pointer-events-none inline-block transform shadow-lg ring-0 transition duration-200 ease-in-out"
      >
        <MoonIcon v-if="enabled" class="h-[20px] w-[20px] fill-gray-900" />
        <SunIcon v-else class="h-[20px] w-[20px] fill-yellow-500" />
      </span>
    </Switch>
  </div>
</template>

<script setup lang="ts">
import { Switch } from "@headlessui/vue";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/solid";

useHead({
  script: [
    {
      children: `if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.setAttribute("data-theme", "dark")
      } else {
        document.documentElement.removeAttribute("data-theme")
      }`
    }
  ]
});

const { enabled, toggleTheme } = useTheme();
</script>
