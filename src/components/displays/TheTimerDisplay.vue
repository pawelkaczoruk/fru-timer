<template>
  <div class="timer-display">
    <p 
      class="timer"
      :class="getTimerClass"
    >{{ getFormattedTime(getCurrentTime) }}</p>
    <p
      class="timer-info"
      v-if="!getSessionLength"
    >Press and hold to start the timer</p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import useCurrentData from '@/composables/store/useCurrentData'
import useTimeFormatter from '@/composables/useTimeFormatter'
import useTimer from '@/composables/useTimer'
import useSessionResults from '@/composables/store/useSessionResults'

import { TimerState } from '@/types/Timer'

export default defineComponent({
  name: 'TheTimerDisplay',

  setup() {
    const { getCurrentTime } = useCurrentData()
    const { getFormattedTime } = useTimeFormatter()
    const { getSessionLength } = useSessionResults()
    const { getState } = useTimer()

    const getTimerClass = computed(() => getState.value === TimerState.READY ?
      'ready' : getState.value === TimerState.NOT_READY ?
      'not-ready' : ''
    )

    return { 
      getCurrentTime,
      getFormattedTime,
      getTimerClass,
      getSessionLength
    }
  }
})
</script>

<style lang="scss" scoped>

.timer-display {
  min-width: 250px;
  text-align: center;
  user-select: none;
}

.timer {
  font-size: 4em;
  color: var(--c-timer-idle);

  &.ready { color: var(--c-timer-ready); }
  &.not-ready { color: var(--c-timer-not-ready); }
}

.timer-info {
  position: absolute;
  width: 100%;
  color: var(--c-timer-info);
}

</style>