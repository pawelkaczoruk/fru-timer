<template>
  <div class="session-menu">

    <ul class="session-list">
      <li
        v-for="session in getSessionsConfig"
        :key="session.key"
      >
        <button
          class="session-button"
          :class="getCurrentSessionKey === session.key ? 'active' : ''"
          @click="selectSession(session.key)"
        >{{ session.name }}</button>
      </li>
    </ul>

    <button
      class="add-button"
      @click="createSession()"
    >New</button>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useConfig from '@/composables/store/useConfig'
import useDB from '@/composables/useDB'
import useLocalStorage from '@/composables/useLocalStorage'
import useMenuController from '@/composables/menu/useMenuController'

export default defineComponent({
  name: 'TheSessionMenu',

  setup() {
    const { toggleSessionMenu } = useMenuController()
    const { createSession: createSessionDB } = useDB()
    const { setCustomSessionsConfig: setCustomSessionsConfigLS } = useLocalStorage()
    const {
      getCustomSessionsConfig,
      getSessionsConfig,
      getCurrentSessionKey,
      setCurrentSessionKey,
      addSessionConfig
    } = useConfig()


    const selectSession = (key: number) => {
      setCurrentSessionKey(key)
      toggleSessionMenu()
    }  

    const createSession = () => {
      const key = Date.now()
      const cube = 'c3x3'
      const name = 'custom 3x3'

      createSessionDB(key)
      addSessionConfig({ key, cube, name })
      setCustomSessionsConfigLS(getCustomSessionsConfig.value)
      selectSession(key)
    }

    return { 
      getSessionsConfig,
      getCurrentSessionKey,
      selectSession,
      createSession
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.session-menu {
  @include rect(8em, 20em, 0.75em, var(--c-menu));
  overflow: hidden;
}

.session-list {
  padding: 0.5em;
  text-align: right;
}

.session-button {
  color: var(--c-text-secondary);

  &.active { color: var(--c-menu-icon-active); }
}

</style>