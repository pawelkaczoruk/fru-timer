<template>
  <p 
    class="display"
    :class="getTimerClass"
  >
    {{ getFormattedTime(getCurrentTime) }}
  </p>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import useStore from '@/composables/useStore'
import useTimeFormatter from '@/composables/useTimeFormatter'
import useTimer from '@/composables/useTimer'

export default defineComponent({
  name: 'TheTimerDisplay',

  setup() {
    const { getCurrentTime } = useStore()
    const { getFormattedTime } = useTimeFormatter()
    const { getState } = useTimer()
    const getTimerClass = computed(() => getState.value === 1 ? 'ready' : getState.value === -1 ? 'not-ready' : '')

    return { 
      getCurrentTime,
      getFormattedTime,
      getTimerClass
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.display {
  @include text($size: 4em, $align: center);
  user-select: none;

  &.ready {
    color: var(--c-success);
  }

  &.not-ready {
    color: var(--c-error);
  }
}

</style>