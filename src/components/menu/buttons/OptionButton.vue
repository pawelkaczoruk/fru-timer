<template>
  <button class="option-button center-content">

    <i class="option-icon center-content">
      <slot></slot>
    </i>

  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({ name: 'OptionButton' })
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.option-button {
  @include rect(2.5em, 2.5em, 50%, var(--c-menu));
  box-shadow: 0 0 0 0.5625em var(--c-bg-second);
}

.option-icon {
  font-weight: bold;
  font-style: normal;
  color: var(--c-menu-icon);
  fill: var(--c-menu-icon);
}

</style>