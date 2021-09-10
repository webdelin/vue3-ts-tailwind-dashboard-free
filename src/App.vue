<template>
  <div class="flex flex-no-wrap bg-gray-200">
    <the-sidebar></the-sidebar>
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheSidebar from "@/components/TheSidebar.vue";
export default defineComponent({
  components: { TheSidebar },
  setup() {},
});
</script>
