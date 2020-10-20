<template>
  <div class="session-select">

    <ul class="sessions-menu">
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
import { defineComponent, inject, nextTick } from 'vue'
import useConfig from '@/composables/store/useConfig'
import useDB from '@/composables/useDB'
import useLocalStorage from '@/composables/useLocalStorage'

export default defineComponent({
  name: 'TheSessionSelect',

  setup() {
    const toggleMenuVisibility = inject<(state?: boolean) => void>('toggleSessionMenuVisibility')

    const {
      getCustomSessionsConfig,
      getSessionsConfig,
      getCurrentSessionKey,
      setCurrentSessionKey,
      addSessionConfig
    } = useConfig()

    const { createSession: createSessionDB } = useDB()
    const { setCustomSessionsConfig: setCustomSessionsConfigLS } = useLocalStorage()

    const selectSession = (key: number) => {
      setCurrentSessionKey(key)
      nextTick(() => {
        if (toggleMenuVisibility) toggleMenuVisibility(false)
      })
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

.session-select {
  @include rect(8em, 20em, 0.75em, var(--c-menu));
  @include position(absolute, $right: 0.5em, $bottom: 4.125em, $z-index: -1);
  overflow: hidden;

  &.expand-enter-active,
  &.expand-leave-active {
    transition: height 0.4s ease-in-out;
  }
  &.expand-enter-from,
  &.expand-leave-to {
    height: 0;
  }
}

.sessions-menu {
  padding: 0.5em;
  text-align: right;
}

.session-button {
  color: var(--c-text-secondary);

  &.active { color: var(--c-menu-icon-active); }
}

</style>