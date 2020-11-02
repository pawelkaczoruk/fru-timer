<template>
  <div class="scramble-display">

    <p class="scramble">{{ getCurrentScramble }}</p>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useCurrentData from '@/composables/store/useCurrentData'

export default defineComponent({
  name: 'TheScrambleDisplay',

  setup() {
    const { getCurrentScramble } = useCurrentData()

    return { getCurrentScramble }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.scramble {
  @include text(1.4375em, 500, center, var(--c-text-scramble));
  white-space: pre-wrap;
  user-select: none;

  @media screen and (any-hover: hover) { user-select: text; }
}

</style>