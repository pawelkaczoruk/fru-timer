<template>
  <div class="menu">

    <TheHomeButton
      :highlight="getOptionMenuVisibility"
      @click="toggleOptionMenu()"
    />

    <TheMenuBar />

    <transition name="grow">
      <TheOptionMenu v-show="getOptionMenuVisibility" />
    </transition>

    <transition name="expand">
      <TheSessionMenu v-show="getSessionMenuVisibility" />
    </transition>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheSessionMenu from './expandables/TheSessionMenu.vue'
import TheOptionMenu from './expandables/TheOptionMenu.vue'
import TheHomeButton from './buttons/TheHomeButton.vue'
import TheMenuBar from './TheMenuBar.vue'

import useMenuController from '@/composables/menu/useMenuController'

export default defineComponent({
  name: 'TheMenu',
  components: {
    TheSessionMenu,
    TheOptionMenu,
    TheHomeButton,
    TheMenuBar
  },

  setup() {
    const {
      getOptionMenuVisibility,
      getSessionMenuVisibility,
      toggleOptionMenu
    } = useMenuController()

    return {
      getOptionMenuVisibility,
      getSessionMenuVisibility,
      toggleOptionMenu
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.menu {
  @include position(fixed, $left: 50%, $bottom: 0);
  transform: translateX(-50%);
  width: 100%;
  max-width: 22.5em;
  margin-bottom: 0.625em;
  padding: 0 0.5em;
}

.option-menu {
  @include position(absolute, $bottom: 0, $left: 50%);
  transform: translate(-50%, -4.875em);

  &.grow-enter-active,
  &.grow-leave-active { transition: transform 0.4s ease-in-out; }
  &.grow-enter-from,
  &.grow-leave-to { transform: translate(-50%, -1.875em) scale(0.2); }
}

.session-menu {
  @include position(absolute, $right: 0.5em, $bottom: 4.125em, $z-index: -1);

  &.expand-enter-active,
  &.expand-leave-active { transition: height 0.4s ease-in-out; }
  &.expand-enter-from,
  &.expand-leave-to { height: 0; }
}

</style>