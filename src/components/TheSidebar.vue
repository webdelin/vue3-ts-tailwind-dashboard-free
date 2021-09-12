<template>
  <aside
    class="
      hidden
      pt-16
      w-64
      text-white
      bg-gray-700
      fixed
      inset-y-0
      overflow-x-hidden overflow-y-auto
      sm:block
    "
  >
    <div class="p-4 min-h-full">
      <!-- Extract: user_info blade partial -->
      <div
        class="px-6 pb-6 flex items-center border-b border-gray-100 sm:flex-col"
      >
        <div
          class="hidden px-3 text-white text-base rounded-full border sm:block"
        >
          Username
        </div>
        <div
          class="
            mr-auto
            text-white
            flex-shrink-0 flex
            justify-center
            items-center
            rounded-full
            border-4
            sm:mt-4
            sm:mx-auto
          "
        >
          <svg
            class="fill-current w-24 h-24 sm:w-32 sm:h-32"
            viewBox="0 0 24 24"
          >
            <path
              d="M12,8L10.67,8.09C9.81,7.07 7.4,4.5 5,4.5C5,4.5 3.03,7.46 4.96,11.41C4.41,12.24 4.07,12.67 4,13.66L2.07,13.95L2.28,14.93L4.04,14.67L4.18,15.38L2.61,16.32L3.08,17.21L4.53,16.32C5.68,18.76 8.59,20 12,20C15.41,20 18.32,18.76 19.47,16.32L20.92,17.21L21.39,16.32L19.82,15.38L19.96,14.67L21.72,14.93L21.93,13.95L20,13.66C19.93,12.67 19.59,12.24 19.04,11.41C20.97,7.46 19,4.5 19,4.5C16.6,4.5 14.19,7.07 13.33,8.09L12,8M9,11A1,1 0 0,1 10,12A1,1 0 0,1 9,13A1,1 0 0,1 8,12A1,1 0 0,1 9,11M15,11A1,1 0 0,1 16,12A1,1 0 0,1 15,13A1,1 0 0,1 14,12A1,1 0 0,1 15,11M11,14H13L12.3,15.39C12.5,16.03 13.06,16.5 13.75,16.5A1.5,1.5 0 0,0 15.25,15H15.75A2,2 0 0,1 13.75,17C13,17 12.35,16.59 12,16V16H12C11.65,16.59 11,17 10.25,17A2,2 0 0,1 8.25,15H8.75A1.5,1.5 0 0,0 10.25,16.5C10.94,16.5 11.5,16.03 11.7,15.39L11,14Z"
            />
          </svg>
        </div>
        <div class="ml-4 flex-1 flex flex-col sm:mt-4 sm:ml-0 sm:items-center">
          <div class="text-white text-2xl sm:hidden">Username</div>
          <div class="text-yellow-500 text-xl sm:text-sm">10.000 BET</div>
        </div>
      </div>
        <SidebarItems />
<!--         <Suspense>
        </Suspense> -->
    </div>
  </aside>
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