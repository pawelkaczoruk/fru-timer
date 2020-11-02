<template>

  <button class="order-button center-content">
    <i
      class="order-icon center-content"
      :class="highlight ? 'active' : ''"
    >
      <slot></slot>
    </i>
  </button>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OrderButton',
  props: {
    highlight: { type: Boolean, default: false }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.order-button {
  width: 100%;
  padding: 0.5em 0;

  @include hover() {
    .order-icon {
      transition: all 0.15s ease-in-out;
      color: var(--c-menu-icon-active);
      fill: var(--c-menu-icon-active);
    }
  }
}

.order-icon {
  @include text($w: bold, $s: normal);
  fill: var(--c-text-secondary);
  transition: all 0.4s ease-in-out;

  &.active {
    color: var(--c-menu-icon-active);
    fill: var(--c-menu-icon-active);
  }
}

</style>