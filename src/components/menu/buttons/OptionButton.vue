<template>
  <button class="option-button center-content">

    <i
      class="option-icon center-content"
      :class="highlight ? 'active' : ''"
    >
      <slot></slot>
    </i>

  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'OptionButton',
  props: {
    highlight: { type: Boolean, default: false }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.option-button {
  @include rect(2.5em, 2.5em, 50%, var(--c-menu));
  @include shadow();
  @include hover() {
    .option-icon {
      transition: all 0.15s ease-in-out;
      color: var(--c-menu-icon-active);
      fill: var(--c-menu-icon-active);
    }
  }
}

.option-icon {
  @include text($w: bold, $s: normal, $c: var(--c-menu-icon));
  user-select: none;
  fill: var(--c-menu-icon);
  transition: all 0.4s ease-in-out;

  &.active {
    fill: var(--c-menu-icon-active);
    color: var(--c-menu-icon-active);
  }
}

</style>