<template>
  <button class="menu-button center-content">
    
    <i
      class="menu-icon center-content"
      :class="highlight ? 'active' : ''"
    >
      <slot></slot>
    </i>

  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'MenuButton',
  props: {
    highlight: { type: Boolean, default: false }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.menu-button { @include rect(3.5625em, 3.5625em); }

.menu-icon {
  fill: var(--c-menu-icon);
  transition: all 0.4s ease-in-out;

  &.active { fill: var(--c-menu-icon-active); }
}

</style>