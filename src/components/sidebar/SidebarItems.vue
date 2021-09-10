<template>
  <div
    class="h-16 w-full flex items-center text-white"
    v-for="menu in menus"
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
    const menus = await menuData();
    console.log("menu ", menus.menus.value.menus);
    return { menus:menus.menus.value.menus };
  },
});
</script>
