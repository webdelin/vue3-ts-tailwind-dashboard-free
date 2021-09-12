<template>
<div id="app">
  <the-nav />
  <the-sidebar />
  <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import TheNav from "@/components/TheNav.vue";
import TheSidebar from "@/components/TheSidebar.vue";
export default defineComponent({
  components: { TheSidebar, TheNav },
  setup() {
    const store = useStore();
    store.dispatch("dashboard/getCategories");
    store.dispatch("users/getUsers");
  },
});
</script>
