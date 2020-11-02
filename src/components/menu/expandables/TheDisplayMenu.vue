<template>
  <div class="display-menu">

    <ul class="menu-list">
      <li>
        <DisplayButton
          @click="toggleScrambleDisplay()"
          :highlight="getScrambleVisibility"
        >Scramble</DisplayButton>
      </li>
      <li>
        <DisplayButton
          @click="toggleStatsDisplay()"
          :highlight="getStatsVisibility"
        >Statistics</DisplayButton>
      </li>
    </ul>

  </div>
</template>

<script lang="ts">
import useMenuController from '@/composables/menu/useMenuController'
import useConfig from '@/composables/store/useConfig'
import { defineComponent } from 'vue'
import DisplayButton from '../buttons/DisplayButton.vue'

export default defineComponent({
  name: 'TheDisplayMenu',
  components: { DisplayButton },

  setup() {
    const {
      toggleStatsDisplay,
      toggleScrambleDisplay
    } = useMenuController()
    const {
      getStatsVisibility,
      getScrambleVisibility
    } = useConfig()

    return { 
      getStatsVisibility,
      getScrambleVisibility,
      toggleStatsDisplay,
      toggleScrambleDisplay
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.display-menu {
  @include rect(8em, 5em, 0.75em, var(--c-menu));
  @include shadow();
  overflow: hidden;
}

.menu-list { padding: 0.5em; }

</style>