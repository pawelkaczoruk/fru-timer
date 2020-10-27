<template>
  <div
    class="home"
    ref="home"
  >

    <TheScrambleDisplay />
    <TheTimerDisplay />
    <TheStatsDisplay />
    <TheListDisplay v-if="false"/>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, Ref } from 'vue'
import TheTimerDisplay from '@/components/TheTimerDisplay.vue'
import TheScrambleDisplay from '@/components/TheScrambleDisplay.vue'
import TheStatsDisplay from '@/components/TheStatsDisplay.vue'
import TheListDisplay from '@/components/TheListDisplay.vue'
import useTimer from '@/composables/useTimer'

export default defineComponent({
  name: 'Home',
  components: {
    TheTimerDisplay,
    TheScrambleDisplay,
    TheStatsDisplay,
    TheListDisplay
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
  @include position(fixed, $t: 50%, $l: 50%);
  transform: translate(-50%, -50%);
}

.stats-display {
  @include position(fixed, $b: 5.5625em, $l: 0);
}

</style>