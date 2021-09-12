<template>
  <main class="pt-16 sm:pl-64">
    <div class="p-4">
      <h1 class="text-gray-700 text-xs uppercase tracking-wider">{{title}}</h1>
        <UserItems />

      <Suspense>
      </Suspense>
    </div>
  </main>
</template>

<script lang="ts">
import UserItems from "@/components/users/UserItems.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { UserItems },
  setup() {
    return {
      title: "Users",
    };
  },
});
</script>