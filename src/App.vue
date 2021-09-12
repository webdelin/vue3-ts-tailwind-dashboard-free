<template>
  <the-nav />
  <the-sidebar />
      <router-view />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheNav from "@/components/TheNav.vue";
import TheSidebar from "@/components/TheSidebar.vue";
export default defineComponent({
  components: { TheSidebar, TheNav },
});
</script>
