<template>
  <button class="option-button center-content">
    <slot></slot>
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

.option-button {
  @include rect(2.5em, 2.5em, 50%, var(--c-menu));
  color: var(--c-menu-icon);
  font-weight: bold;
  pointer-events: auto;
}

</style>