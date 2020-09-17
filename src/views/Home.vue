<template>
  <div class="home">
    <h1>test</h1>
    <TheTimerDisplay :timerState="getState" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { onMounted, onUnmounted } from 'vue'
import TheTimerDisplay from '@/components/TheTimerDisplay'
import useTimer from '@/composables/useTimer'

export default defineComponent({
  name: 'Home',
  components: {
    TheTimerDisplay,
  },

  setup() {
    const { getState, onPress, onRelease } = useTimer()

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

    return {
      getState
    }
  }
})
</script>
