<template>
  <button
    class="display-button"
    :class="highlight ? 'active' : ''"
  >

    <slot></slot>

  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'DisplayButton',
  props: {
    highlight: { type: Boolean, default: false }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.display-button {
  @include rect(100%, 2em);
  color: var(--c-menu-icon);
  font-weight: bold;
  transition: all 0.4s ease-in-out;
  @include hover() { color: var(--c-menu-icon-active); }

  &.active { color: var(--c-menu-icon-active); }
}

</style>