<template>
  <div class="stats-display">
    <p>Solves: {{ getCurrentSessionLength }}</p>
    <p>Mean: {{ getFormattedTime(getSessionMean()) }}</p>
    <p>Mo3: {{ getCurrentSessionLength }}</p>
    <p>Best: {{ getCurrentSessionLength }}</p>
    <p>Ao5: {{ getCurrentSessionLength }}</p>
    <p>Best Ao5: {{ getCurrentSessionLength }}</p>
    <p>Ao12 {{ getCurrentSessionLength }}</p>
    <p>Best Ao12: {{ getCurrentSessionLength }}</p>
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
      getMo3
    } = useStore()

    return {
      getFormattedTime,
      getCurrentSessionLength,
      getSessionMean,
      getMo3
    }
  }
})
</script>

<style lang="scss" scoped>

</style>