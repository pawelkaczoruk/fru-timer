<template>
  <button
    class="menu-button center-content"
    :class="highlight ? 'active' : ''"
  >
    
    <SvgIcon :icon="icon" />

  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SvgIcon from '@/components/utility/SvgIcon.vue'

export default defineComponent({
  name: 'MenuButton',
  components: { SvgIcon },
  props: {
    highlight: { type: Boolean, default: false },
    icon: String
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.menu-button {
  @include rect(3.5625em, 3.5625em);
  @include hover() {
    .svg-icon {
      transition: all 0.15s ease-in-out;
      fill: var(--c-menu-icon-active);
    }
  }

  &.active {
    .svg-icon { fill: var(--c-menu-icon-active); }
  }
}

.svg-icon {
  height: 1.75em;
  fill: var(--c-menu-icon);
  transition: all 0.4s ease-in-out;
}

</style>