<template>
  <span>{{ getFormattedTime(getCurrentTime) }}</span>
  <p>{{ timerState }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import useStore from '@/composables/useStore'
import useTimeFormatter from '@/composables/useTimeFormatter'

export default defineComponent({
  name: 'TheTimerDisplay',
  props: {
    timerState: Number,
  },

  setup() {
    const { getCurrentTime } = useStore()
    const { getFormattedTime } = useTimeFormatter()

    return { 
      getCurrentTime,
      getFormattedTime
    }
  }
})
</script>