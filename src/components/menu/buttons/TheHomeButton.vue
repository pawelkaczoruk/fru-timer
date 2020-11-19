<template>
  <button
    class="home-button center-content"
    :class="highlight ? 'active' : ''"
  >

    <SvgIcon icon="plus" />
    
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from '@/components/utility/SvgIcon.vue'

export default defineComponent({
  name: 'TheHomeButton',
  components: { SvgIcon },
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

  .svg-icon {
    height: 2.375em;
    fill: var(--c-menu-icon-active);
    transition: all 0.4s ease-in-out;
  }

  &.active {
    transform: translate(-50%, -2.25em);
    background: var(--c-menu-icon-active);

    .svg-icon {
      fill: var(--c-menu);
      transform: rotate(135deg);
    }
  }

  @include hover(0.4s) {
    background: var(--c-menu-icon-active);

    .svg-icon { fill: var(--c-menu); }
  }
}

</style>