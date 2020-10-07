<template>
  <div class="stats-display wrapper">
    <div class="column">
      <span>Solves: {{ getCurrentSessionLength }}</span>
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
import useTimeFormatter from '@/composables/useTimeFormatter'
import useStore from '@/composables/useStore'

export default defineComponent({
  name: 'TheStatsDisplay',

  setup() {
    const { getFormattedTime } = useTimeFormatter()
    const {
      getCurrentSessionLength,
      getSessionMean,
      getMo3,
      getAo5,
      getAo12,
      getBestSingle,
      getBestMo3,
      getBestAo5,
      getBestAo12,
      getCurrentMo3,
      getCurrentAo5,
      getCurrentAo12
    } = useStore()

    return {
      getFormattedTime,
      getCurrentSessionLength,
      getSessionMean,
      getMo3,
      getAo5,
      getAo12,
      getBestSingle,
      getBestMo3,
      getBestAo5,
      getBestAo12,
      getCurrentMo3,
      getCurrentAo5,
      getCurrentAo12
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

  span { font-size: 0.875em; }

  .column {
    display: grid;
    grid-template: auto / 1fr;

    &.right { text-align: end; }
  }
}

</style>