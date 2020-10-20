<template>
  <div
    class="home"
    ref="home"
  >
    <TheScrambleDisplay />
    <TheTimerDisplay />
    <TheStatsDisplay />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, Ref } from 'vue'
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
    const home: Ref<HTMLDivElement | null> = ref(null)

    onMounted(() => {
      home.value?.addEventListener('keydown', onPress)
      home.value?.addEventListener('keyup', onRelease)
      home.value?.addEventListener('touchstart', onPress)
      home.value?.addEventListener('touchend', onRelease)
    })

    onUnmounted(() => {
      home.value?.removeEventListener('keydown', onPress)
      home.value?.removeEventListener('keyup', onRelease)
      home.value?.removeEventListener('touchstart', onPress)
      home.value?.removeEventListener('touchend', onRelease)
    })

    return { home }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.timer-display {
  @include position(fixed, $top: 50%, $left: 50%);
  transform: translate(-50%, -50%);
}

.stats-display {
  @include position(fixed, $bottom: 5.5625em, $left: 0);
}

</style>