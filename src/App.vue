<template>
  <the-nav />
  <the-sidebar />
  <main class="pt-16 sm:pl-64">
    <div class="p-4">
      <router-view />
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import TheNav from "@/components/TheNav.vue";
import TheSidebar from "@/components/TheSidebar.vue";
export default defineComponent({
  components: { TheSidebar, TheNav },
});
</script>
