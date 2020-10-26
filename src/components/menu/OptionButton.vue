<template>
  <button class="option-button center-content">
    <v-slot></v-slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'OptionButton',
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.menu-icon {
  @include rect(1.5em, 1.5em);
  fill: var(--c-menu-icon);
  transition: all 0.4s ease-in-out;
}

.option-button {
  @include rect(2.5em, 2.5em, 50%, var(--c-menu));
  color: var(--c-menu-icon);
  font-weight: bold;
  pointer-events: auto;

  &:first-child { grid-area: first; }
  &:nth-child(2) { grid-area: second; }
  &:nth-child(3) { grid-area: third; }
  &:nth-child(4) { grid-area: fourth; }

  &.active .menu-icon { fill: var(--c-menu-icon-active); }
}

</style>