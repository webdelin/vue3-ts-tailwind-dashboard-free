<template>
  <div
    class="h-16 w-full flex items-center text-white"
    v-for="menu in data.menus"
    :key="menu.to"
  >
    {{ menu.label }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

import { menuData } from "@/hooks/menus";
export default defineComponent({
  async setup() {
    const {data} = await menuData();
    console.log("menu ", data);
    console.log("menu ", data.value);
    return { data };
  },
});
</script>
