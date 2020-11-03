<template>
  <button
    class="session-button center-content"
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
  name: 'SessionButton',
  components: { SvgIcon },
  props: {
    highlight: { type: Boolean, default: false },
    icon: String
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.session-button {
  @include rect(100%, 2em);
  @include text($w: 500, $c: var(--c-menu-icon));
  height: 2em;
  white-space: nowrap;
  overflow: hidden;
  transition: all 0.15s ease-in-out;

  @include hover() {
    color: var(--c-menu-icon-active);

    .svg-icon { fill: var(--c-menu-icon-active); }
  }

  &.active {
    color: var(--c-menu-icon-active);
    
    .svg-icon { fill: var(--c-menu-icon-active); }
  }
}

.svg-icon {
  @include rect(1.75em, 1.75em);
  margin-right: 0.5em;
  fill: var(--c-menu-icon);
  transition: all 0.15s ease-in-out;
}

</style>