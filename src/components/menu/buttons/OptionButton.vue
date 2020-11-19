<template>
  <button
    class="option-button center-content"
    :class="highlight ? 'active' : ''"
  >

    <SvgIcon :icon="icon" />
    <slot></slot>

  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from '@/components/utility/SvgIcon.vue'
export default defineComponent({
  name: 'OptionButton',
  components: { SvgIcon },
  props: {
    highlight: { type: Boolean, default: false },
    icon: String
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.option-button {
  @include rect(2.5em, 2.5em, 50%, var(--c-menu));
  @include text($w: bold, $s: normal, $c: var(--c-menu-icon));
  @include shadow();
  user-select: none;
  transition: all 0.4s ease-in-out;
  @include hover() {
    color: var(--c-menu-icon-active);

    .svg-icon {
      transition: all 0.15s ease-in-out;
      fill: var(--c-menu-icon-active);
    }
  }

  &.active {
    color: var(--c-menu-icon-active);

    .svg-icon { fill: var(--c-menu-icon-active); }
  }
}

.svg-icon {
  @include rect(1.5em, 1.5em);
  fill: var(--c-menu-icon);
  transition: all 0.4s ease-in-out;
}

</style>