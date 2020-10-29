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
  box-shadow: 0 0 0 0.5625em var(--c-bg);
  @include hover() {
    .option-icon {
      transition: all 0.15s ease-in-out;
      color: var(--c-menu-icon-active);
      fill: var(--c-menu-icon-active);
    }
  }
}

.option-icon {
  user-select: none;
  font-weight: bold;
  font-style: normal;
  color: var(--c-menu-icon);
  fill: var(--c-menu-icon);
  transition: all 0.4s ease-in-out;

  &.active {
    fill: var(--c-menu-icon-active);
    color: var(--c-menu-icon-active);
  }
}

</style>