<template>
  <div
    v-for="(user, i) in users[0]"
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
    {{ user.name }}
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    return {
      users: store.getters["users/users"],
    };
  },
});
</script>
