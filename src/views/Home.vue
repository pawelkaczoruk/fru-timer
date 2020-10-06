<template>
  <div class="home">
    <TheScrambleDisplay />
    <TheTimerDisplay />
    <TheStatsDisplay />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted } from 'vue'
import TheTimerDisplay from '@/components/TheTimerDisplay.vue'
import TheScrambleDisplay from '@/components/TheScrambleDisplay.vue'
import TheStatsDisplay from '@/components/TheStatsDisplay.vue'
import useTimer from '@/composables/useTimer'

export default defineComponent({
  name: 'Home',
  components: {
    TheTimerDisplay,
    TheScrambleDisplay,
    TheStatsDisplay
  },

  setup() {
    const { onPress, onRelease } = useTimer()

    onMounted(() => {
      document.addEventListener('keydown', onPress)
      document.addEventListener('keyup', onRelease)
      document.addEventListener('touchstart', onPress)
      document.addEventListener('touchend', onRelease)
    })

    onUnmounted(() => {
      document.removeEventListener('keydown', onPress)
      document.removeEventListener('keyup', onRelease)
      document.removeEventListener('touchstart', onPress)
      document.removeEventListener('touchend', onRelease)
    })
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.timer-display {
  @include position(absolute, $top: 50%, $left: 50%);
  transform: translate(-50%, -50%);
}

</style>