<template>
  <div class="menu-bar">

    <div>
      <MenuButton
        :highlight="getCompetitionModalVisibility"
        icon="competition"
        @click="toggleCompetitionModal()"
      />
      <MenuButton
        :highlight="getDisplayMenuVisibility"
        icon="display"
        @click="toggleDisplayMenu()"
      />
    </div>

    <div>
      <MenuButton
        :highlight="getListVisibility"
        icon="list"
        @click="toggleTimesList()"
      />
      <MenuButton
        :highlight="getSessionMenuVisibility"
        icon="sessions"
        @click="toggleSessionMenu()"
      />
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MenuButton from './buttons/MenuButton.vue'
import useMenuController from '@/composables/menu/useMenuController'
import useConfig from '@/composables/store/useConfig'

export default defineComponent({
  name: 'TheMenuBar',
  components: { MenuButton },

  setup() {
    const {
      toggleDisplayMenu,
      toggleTimesList,
      toggleSessionMenu,
      toggleCompetitionModal,
      getDisplayMenuVisibility,
      getSessionMenuVisibility,
      getCompetitionModalVisibility
    } = useMenuController()

    const { getListVisibility } = useConfig()

    return {
      toggleDisplayMenu,
      toggleTimesList,
      toggleSessionMenu,
      toggleCompetitionModal,
      getDisplayMenuVisibility,
      getSessionMenuVisibility,
      getListVisibility,
      getCompetitionModalVisibility
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.menu-bar {
  @include flex(flex, space-between, center);
  border-radius: 0.75em;
  overflow: hidden;
  background: var(--c-menu);
}

</style>