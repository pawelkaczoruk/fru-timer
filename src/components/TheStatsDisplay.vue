<template>
  <div class="stats-display">
    <p>Solves: {{ getCurrentSessionLength }}</p>
    <p>Mean: {{ getFormattedTime(getSessionMean()) }}</p>
    <p>Best: {{ getFormattedTime(getBestSingle) }}</p>
    <p>Mo3: {{ getFormattedTime(getCurrentMo3) }}</p>
    <p>Best Mo3: {{ getFormattedTime(getBestMo3) }}</p>
    <p>Ao5: {{ getFormattedTime(getCurrentAo5) }}</p>
    <p>Best Ao5: {{ getFormattedTime(getBestAo5) }}</p>
    <p>Ao12 {{ getFormattedTime(getCurrentAo12) }}</p>
    <p>Best Ao12: {{ getFormattedTime(getBestAo12) }}</p>
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

</style>