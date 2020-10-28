<template>
  <div
    class="home"
    ref="homeRef"
  >

    <TheScrambleDisplay />
    <TheTimerDisplay />
    <TheStatsDisplay v-if="getStatsVisibility" />
    <TheListDisplay v-if="getListVisibility" />

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, Ref } from 'vue'
import TheTimerDisplay from '@/components/TheTimerDisplay.vue'
import TheScrambleDisplay from '@/components/TheScrambleDisplay.vue'
import TheStatsDisplay from '@/components/TheStatsDisplay.vue'
import TheListDisplay from '@/components/TheListDisplay.vue'
import useTimer from '@/composables/useTimer'
import useConfig from '@/composables/store/useConfig'

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
    const homeRef: Ref<HTMLDivElement | null> = ref(null)

    onMounted(() => {
      homeRef.value?.addEventListener('keydown', onPress)
      homeRef.value?.addEventListener('keyup', onRelease)
      homeRef.value?.addEventListener('touchstart', onPress)
      homeRef.value?.addEventListener('touchend', onRelease)
    })

    onUnmounted(() => {
      homeRef.value?.removeEventListener('keydown', onPress)
      homeRef.value?.removeEventListener('keyup', onRelease)
      homeRef.value?.removeEventListener('touchstart', onPress)
      homeRef.value?.removeEventListener('touchend', onRelease)
    })

    const {
      getListVisibility,
      getStatsVisibility
    } = useConfig()

    return {
      homeRef,
      getListVisibility,
      getStatsVisibility
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.home {
  padding: 0 0.5em;
}

.timer-display {
  @include position(fixed, $t: 50%, $l: 50%);
  transform: translate(-50%, -50%);
}

.stats-display {
  @include position(fixed, $b: 5.5625em, $l: 0);
}

.list-display {
  @include position(fixed, 3.75em, $l: 50%);
  transform: translateX(-50%);
}

</style>