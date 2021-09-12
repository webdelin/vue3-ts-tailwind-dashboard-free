<template>
  <div class="mt-4">
    <router-link
      :to="menu.to"
      :title="menu.label"
      class="
        px-10
        py-2
        flex
        items-center
        text-xl text-gray-100
        hover:text-orange-500
        sm:px-4
        sm:text-base
      "
    >
      <svg
        class="w-6 h-6 stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 71"
      >
        <path
          d="M28.559 5.848c2.665-6.75 12.217-6.75 14.882 0l.691 1.751a8 8 0 009.784 4.712l1.8-.551c6.938-2.125 12.895 5.343 9.279 11.635l-.938 1.632a8 8 0 002.416 10.587l1.553 1.063c5.988 4.1 3.862 13.413-3.311 14.51l-1.86.284a8 8 0 00-6.771 8.49l.136 1.877c.528 7.238-8.079 11.382-13.408 6.457l-1.382-1.277a8 8 0 00-10.86 0l-1.382 1.277c-5.33 4.925-13.936.78-13.408-6.457l.136-1.877a8 8 0 00-6.77-8.49l-1.86-.285c-7.174-1.096-9.3-10.409-3.312-14.509l1.553-1.063a8 8 0 002.416-10.587l-.938-1.632c-3.616-6.292 2.34-13.76 9.28-11.635l1.799.55a8 8 0 009.784-4.71l.69-1.752z"
          fill="none"
        />
      </svg>
      <div class="ml-6 flex-1 sm:ml-4">{{ menu.label }}</div>

      <span v-if="menu.child && menu.child.length">
        <svg
          class="fill-current w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M9.3 8.7a1 1 0 011.4-1.4l4 4a1 1 0 010 1.4l-4 4a1 1 0 01-1.4-1.4l3.29-3.3-3.3-3.3z"
          />
        </svg>
        <router-link
          v-show="false"
          v-for="submenu in menu.child"
          :key="submenu.to"
          :to="submenu.to"
          :title="submenu.label"
          >{{ submenu.label }}</router-link
        >
      </span>
    </router-link>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ["menu"],
});
</script>
