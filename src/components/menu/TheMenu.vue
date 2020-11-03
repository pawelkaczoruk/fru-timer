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
      <TheDisplayMenu v-show="getDisplayMenuVisibility" />
    </transition>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheDisplayMenu from './expandables/TheDisplayMenu.vue'
import TheOptionMenu from './expandables/TheOptionMenu.vue'
import TheHomeButton from './buttons/TheHomeButton.vue'
import TheMenuBar from './TheMenuBar.vue'
import useMenuController from '@/composables/menu/useMenuController'

export default defineComponent({
  name: 'TheMenu',
  components: {
    TheDisplayMenu,
    TheOptionMenu,
    TheHomeButton,
    TheMenuBar
  },

  setup() {
    const {
      getDisplayMenuVisibility,
      getOptionMenuVisibility,
      toggleOptionMenu
    } = useMenuController()

    return {
      getDisplayMenuVisibility,
      getOptionMenuVisibility,
      toggleOptionMenu
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.menu {
  @include position(fixed, $l: 50%, $b: 0);
  transform: translateX(-50%);
  width: 100%;
  max-width: 22.5em;
  margin-bottom: 0.625em;
  padding: 0 0.5em;
}

.option-menu {
  @include position(absolute, $b: 0, $l: 50%);
  transform: translate(-50%, -4.875em);
  @include animation(grow);
}

.display-menu {
  @include position(absolute, $l: 0.5em, $b: 4.125em, $z: -1);
  @include animation(expand);
}

</style>