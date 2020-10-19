<template>
  <div
    class="stats-display wrapper"
    v-if="getStatsVisibility"
  >
    <div class="column">
      <span>Solves: {{ getSessionLength }}</span>
      <span>Best: {{ getFormattedTime(getBestSingle) }}</span>
      <span>Best Mo3: {{ getFormattedTime(getBestMo3) }}</span>
      <span>Best Ao5: {{ getFormattedTime(getBestAo5) }}</span>
      <span>Best Ao12: {{ getFormattedTime(getBestAo12) }}</span>
    </div>
    <div class="column right">
      <span>Mean: {{ getFormattedTime(getSessionMean()) }}</span>
      <span>Mo3: {{ getFormattedTime(getCurrentMo3) }}</span>
      <span>Ao5: {{ getFormattedTime(getCurrentAo5) }}</span>
      <span>Ao12: {{ getFormattedTime(getCurrentAo12) }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import useConfig from '@/composables/store/useConfig'
import useSessionBests from '@/composables/store/useSessionBests'
import useSessionHistory from '@/composables/store/useSessionHistory'
import useSessionResults from '@/composables/store/useSessionResults'
import useTimeFormatter from '@/composables/useTimeFormatter'

export default defineComponent({
  name: 'TheStatsDisplay',

  setup() {
    const { getFormattedTime } = useTimeFormatter()
    const { getBestSingle, getBestMo3, getBestAo5, getBestAo12 } = useSessionBests()
    const { getCurrentMo3, getCurrentAo5, getCurrentAo12 } = useSessionHistory()
    const { getSessionLength, getSessionMean } = useSessionResults()
    const { getStatsVisibility } = useConfig()

    return {
      getFormattedTime,

      getBestAo5,
      getBestAo12,
      getBestMo3,
      getBestSingle,

      getCurrentAo5,
      getCurrentAo12,
      getCurrentMo3,

      getSessionLength,
      getSessionMean,

      getStatsVisibility
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.stats-display {
  @include flex(flex, space-between, flex-end);
  width: 100%;
  user-select: none;

  span {
    color: var(--c-text-secondary);
    line-height: 1.375em;
  }

  .column {
    display: grid;
    grid-template: auto / 1fr;

    &.right { text-align: end; }
  }
}

</style>