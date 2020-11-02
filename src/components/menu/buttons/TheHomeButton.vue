<template>
  <button
    class="home-button center-content"
    :class="highlight ? 'active' : ''"
  >

    <svg
      class="home-icon"
      viewBox="0 0 38.711 38.729"
    >
      <g transform="translate(-0.078)">
        <path
          d="M33.126,5.672A19.364,19.364,0,0,0,5.741,33.057,19.364,19.364,0,0,0,33.126,5.672Zm-2.489,24.9A15.844,15.844,0,0,1,8.23,8.161,15.844,15.844,0,0,1,30.637,30.568Z"
          transform="translate(0)"
        />
        <path
          d="M82.885,70.562h-8.8v-8.8a1.76,1.76,0,1,0-3.521,0v8.8h-8.8a1.76,1.76,0,1,0,0,3.521h8.8v8.8a1.76,1.76,0,1,0,3.521,0v-8.8h8.8a1.76,1.76,0,0,0,0-3.521Z"
          transform="translate(-52.889 -52.958)"
        />
      </g>
    </svg>
    
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheHomeButton',
  props: {
    highlight: { type: Boolean, default: false}
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.home-button {
  @include rect(4.25em, 4.25em, 0.9375em, var(--c-menu));
  @include position(absolute, $b: 0, $l: 50%, $z: 10);
  transform: translate(-50%, -1.0625em);
  @include shadow();
  transition: all 0.4s ease-in-out;

  .home-icon {
    height: 2.375em;
    fill: var(--c-menu-icon-active);
    transition: all 0.4s ease-in-out;
  }

  &.active {
    transform: translate(-50%, -2.25em);
    background: var(--c-menu-icon-active);

    .home-icon {
      fill: var(--c-menu);
      transform: rotate(135deg);
    }
  }

  @include hover(0.4s) {
    background: var(--c-menu-icon-active);

    .home-icon { fill: var(--c-menu); }
  }
}

</style>