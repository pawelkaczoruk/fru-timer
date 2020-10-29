<template>
  <div class="stats-display">

    <div class="column">
      <span class="stat-item">Solves: {{ getSessionLength }}</span>
      <span class="stat-item">Best: {{ getFormattedTime(getBestSingle) }}</span>
      <span class="stat-item">Best Mo3: {{ getFormattedTime(getBestMo3) }}</span>
      <span class="stat-item">Best Ao5: {{ getFormattedTime(getBestAo5) }}</span>
      <span class="stat-item">Best Ao12: {{ getFormattedTime(getBestAo12) }}</span>
    </div>
    <div class="column right">
      <span class="stat-item">Mean: {{ getFormattedTime(getSessionMean()) }}</span>
      <span class="stat-item">Mo3: {{ getFormattedTime(getCurrentMo3) }}</span>
      <span class="stat-item">Ao5: {{ getFormattedTime(getCurrentAo5) }}</span>
      <span class="stat-item">Ao12: {{ getFormattedTime(getCurrentAo12) }}</span>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
      getSessionMean
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.stats-display {
  @include flex(flex, space-between, flex-end);
  width: 100%;
  padding: 0.625em;
  max-width: 22.5em;
  user-select: none;

  @include media(landscapeShort) { max-width: 39em; }

  .stat-item { color: var(--c-text-secondary); }

  .column {
    display: grid;
    grid-template: auto / 1fr;
    gap: 0.25em;

    &.right { text-align: end; }
  }
}

</style>