<template>
  <span>{{ getFormattedTime(getCurrentTime) }}</span>
  <p>{{ getState }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useStore from '@/composables/useStore'
import useTimeFormatter from '@/composables/useTimeFormatter'
import useTimer from '@/composables/useTimer'

export default defineComponent({
  name: 'TheTimerDisplay',

  setup() {
    const { getCurrentTime } = useStore()
    const { getFormattedTime } = useTimeFormatter()
    const { getState } = useTimer()

    return { 
      getCurrentTime,
      getFormattedTime,
      getState
    }
  }
})
</script>