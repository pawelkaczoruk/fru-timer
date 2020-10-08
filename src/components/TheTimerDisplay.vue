<template>
  <span 
    class="timer-display"
    :class="getTimerClass"
  >
    {{ getFormattedTime(getCurrentTime) }}
  </span>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import useCurrentData from '@/composables/store/useCurrentData'
import useTimeFormatter from '@/composables/useTimeFormatter'
import useTimer from '@/composables/useTimer'

import { TimerState } from '@/types/Timer'

export default defineComponent({
  name: 'TheTimerDisplay',

  setup() {
    const { getCurrentTime } = useCurrentData()
    const { getFormattedTime } = useTimeFormatter()
    const { getState } = useTimer()

    const getTimerClass = computed(() => getState.value === TimerState.READY ?
      'ready' : getState.value === TimerState.NOT_READY ?
      'not-ready' : ''
    )

    return { 
      getCurrentTime,
      getFormattedTime,
      getTimerClass
    }
  }
})
</script>

<style lang="scss" scoped>

.timer-display {
  font-size: 4em;
  user-select: none;

  &.ready {
    color: var(--c-success);
  }

  &.not-ready {
    color: var(--c-error);
  }
}

</style>