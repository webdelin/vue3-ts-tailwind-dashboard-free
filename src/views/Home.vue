<template>
  <main class="pt-16 sm:pl-64">
    <div class="p-4">
      <h1 class="text-gray-700 text-xs uppercase tracking-wider">Content</h1>

      <div
        v-for="i in 15"
        :key="i"
        class="
          mt-4
          p-4
          bg-white
          rounded
          shadow
          font-semibold
          text-center
          hover:shadow-md
        "
      >
        Match #{{ i }}
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup() {
    return {
      title: "title component",
    };
  },
});
</script>