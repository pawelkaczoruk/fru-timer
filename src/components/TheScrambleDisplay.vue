<template>
  <div class="scramble-display">
    <button @click="generateScramble">
      <svg viewBox="0 0 26 26">
        <path
          d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
          transform="translate(1350)"
        />
      </svg>
    </button>
    <p class="scramble wrapper">{{ getCurrentScramble }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useScrambleGenerator from '@/composables/useScrambleGenerator'
import useStore from '@/composables/useStore'

export default defineComponent({
  name: 'TheScrambleDisplay',

  setup() {
    const { getCurrentScramble } = useStore()
    const { generateScramble } = useScrambleGenerator()

    return {
      getCurrentScramble,
      generateScramble
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.scramble-display {
  position: relative;
}

button {
  @include rect(2.5em, 2.5em, 50% 0 50% 50%, var(--c-primary-transparent-35));
  @include position(absolute, $right: 0);
  @include flex(inline-flex, center, center);

  svg {
    @include rect(1.8em, 1.8em);
    fill: var(--c-text);
  }

  &:hover {
    cursor: pointer;
    background: var(--c-primary-transparent-20);

    svg {
      fill: var(--c-light-transparent);
    }
  }
}

.scramble {
  @include text($size: 1.25em, $align: center);
  padding-top: 0.5em;
}

</style>