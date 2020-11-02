<template>
  <div class="timer-display">

    <span 
      class="timer"
      :class="getTimerClass"
    >{{ getFormattedTime(getCurrentTime) }}</span>
    <span
      class="timer-info"
      v-if="!getSessionLength"
    >Press spacebar/screen and hold to start the timer</span>
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
@import '@/assets/styles/mixins';

.timer-display {
  min-width: 250px;
  text-align: center;
  user-select: none;
}

.timer,
.timer-info { display: block; }

.timer {
  @include text(var(--s-timer), $c: var(--c-timer-idle), $f: 'Lato');

  &.ready { color: var(--c-timer-ready); }
  &.not-ready { color: var(--c-timer-not-ready); }
}

.timer-info {
  position: absolute;
  width: 100%;
  color: var(--c-timer-info);
}

</style>