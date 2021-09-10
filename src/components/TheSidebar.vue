<template>
  <div
    class="
      w-64
      absolute
      sm:relative
      bg-gray-800
      shadow
      md:h-full
      flex-col
      justify-between
      hidden
      sm:flex
    "
  >
    <div class="px-8">
      <Suspense>
        <SidebarItems />
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SidebarItems from "@/components/sidebar/SidebarItems.vue";
export default defineComponent({
  components: {
    SidebarItems,
  },
});
</script>
