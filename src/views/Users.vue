<template>

  <div class="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6">
    <h1>{{ title }}</h1>
    <div
      class="w-full h-full rounded border-dashed border-2 border-gray-300"
    >

    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  async setup() {
    return {
      title: "Users"
    };
  },
});
</script>