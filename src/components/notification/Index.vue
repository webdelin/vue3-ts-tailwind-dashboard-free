<template>
  
    <!-- Extract: Notifications Vue component -->
    <div
      class="
        w-16
        h-16
        flex
        justify-center
        items-center
        text-gray-600
        border-l border-gray-600
      "
    >
      <button
        class="p-1 hover:text-white focus:text-white focus:outline-none"
        :class="{ 'text-white': isNotificationsOpen }"
        @click="$emit('notificationsOpen')"
      >
        <svg class="fill-current w-10 h-10" viewBox="0 0 24 24">
          <path
            d="M11.5,22C11.64,22 11.77,22 11.9,21.96C12.55,21.82 13.09,21.38 13.34,20.78C13.44,20.54 13.5,20.27 13.5,20H9.5A2,2 0 0,0 11.5,22M18,10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18L18,16M19.97,10H21.97C21.82,6.79 20.24,3.97 17.85,2.15L16.42,3.58C18.46,5 19.82,7.35 19.97,10M6.58,3.58L5.15,2.15C2.76,3.97 1.18,6.79 1,10H3C3.18,7.35 4.54,5 6.58,3.58Z"
          ></path>
        </svg>
      </button>

      <transition
        enter-active-class="transition duration-200 ease-in-out"
        enter-class="opacity-0"
      >
        <div
          v-show="isNotificationsOpen"
          class="
            absolute
            inset-0
            z-30
            min-h-screen
            bg-black
            opacity-50
            focus:outline-none
          "
          @click="$emit('notificationsOpen')"
          tabindex="-1"
        ></div>
      </transition>

      <transition
        enter-active-class="transition duration-200 ease-in-out transform"
        enter-class="translate-x-full"
        leave-active-class="transition duration-200 ease-in-out transform"
        leave-to-class="translate-x-full"
      >
        <div
          v-show="isNotificationsOpen"
          class="pt-16 absolute inset-0 h-full h-screen"
        >
          <div
            ref="notifications"
            class="
              mt-16
              absolute
              right-0
              inset-y-0
              w-full
              max-w-sm
              overflow-y-auto
            "
          >
            <div
              class="
                relative
                z-40
                py-2
                text-gray-700
                bg-white
                border border-yellow-400
                shadow-lg
              "
            >
              <a
                href="#"
                class="block px-4 py-2 hover:text-gray-100 hover:bg-gray-800"
                v-for="i in 5"
                :key="i"
              >
                Notification {{ i + 1 }}
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits:['notificationsOpen'],
  props:['isNotificationsOpen'],
  setup() {
    
  },
})
</script>
