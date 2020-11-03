<template>
  <div class="session-menu">

    <div class="session-container">
      <ul class="session-list">
        <li
          class="list-item"
          v-for="{ key, cube, name } in getSessionsConfig"
          :key="key"
        >
          <SessionButton
            :icon="cube"
            :highlight="getCurrentSessionKey === key"
            @click="selectSession(key)"
          >{{ name }}</SessionButton>
        </li>
      </ul>

      <DisplayButton
        class="delete-button"
        @click="deleteSession()"
      >Delete selected</DisplayButton>

      <span
        class="delete-alert"
        v-if="isAlertVisible"
      >Unable to delete default session</span>

      <DisplayButton
        class="clear-button"
        @click="clearSession()"
      >Clear selected</DisplayButton>

      <DisplayButton
        class="add-button"
        @click="openSessionModal()"
      >Add session</DisplayButton>

    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SessionButton from '../buttons/SessionButton.vue'
import DisplayButton from '../buttons/DisplayButton.vue'
import useConfig from '@/composables/store/useConfig'
import useDB from '@/composables/useDB'
import useLocalStorage from '@/composables/useLocalStorage'
import useMenuController from '@/composables/menu/useMenuController'
import useSessionResults from '@/composables/store/useSessionResults'
import useCurrentData from '@/composables/store/useCurrentData'
import useSessionBests from '@/composables/store/useSessionBests'
import useSessionHistory from '@/composables/store/useSessionHistory'

export default defineComponent({
  name: 'TheSessionMenu',
  components: {
    SessionButton,
    DisplayButton
  },

  setup() {
    const { setCustomSessionsConfig: setCustomSessionsConfigLS } = useLocalStorage()
    const { setSessionResults } = useSessionResults()
    const { resetTime } = useCurrentData()
    const { resetBests } = useSessionBests()
    const { setSessionHistory } = useSessionHistory()
    const {
      toggleSessionMenu,
      toggleSessionModal
    } = useMenuController()
    const {
      updateSession: updateSessionDB,
      deleteSession: deleteSessionDB
    } = useDB()
    const {
      getCustomSessionsConfig,
      getSessionsConfig,
      getCurrentSessionKey,
      setCurrentSessionKey,
      removeSessionConfig
    } = useConfig()

    const selectSession = (key: number) => {
      setCurrentSessionKey(key)
      toggleSessionMenu()
    }  

    const clearSession = () => {
      updateSessionDB(getCurrentSessionKey.value, [])
      resetTime()
      resetBests()
      setSessionResults([])
      setSessionHistory([])
      toggleSessionMenu()
    }

    const isAlertVisible = ref(false)
    let alertTime: number
    const deleteSession = () => {
      if (getCurrentSessionKey.value < 100) {
        isAlertVisible.value = true
        alertTime = Date.now()
        setTimeout(() => {
          if (alertTime + 2500 < Date.now())
            isAlertVisible.value = false
        }, 3000)
        return
      }
      deleteSessionDB(getCurrentSessionKey.value)
      removeSessionConfig(getCurrentSessionKey.value)
      setCustomSessionsConfigLS(getCustomSessionsConfig.value)
      setCurrentSessionKey(2)
    }

    const openSessionModal = () => {
      toggleSessionModal()
      toggleSessionMenu()
    }

    return { 
      getSessionsConfig,
      getCurrentSessionKey,
      selectSession,
      openSessionModal,
      clearSession,
      deleteSession,
      isAlertVisible
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.session-menu {
  @include rect(100%, calc(100% - 3.75em - 2 * 0.625em - 3.5625em));
  padding: 0 0.5em;
  max-width: 22.5em;
  overflow: hidden;
  user-select: none;
}

.session-container {
  height: 100%;
  padding: 0.75em 0.75em;
  border-radius: 0.75em;
  background: var(--c-menu);
  overflow: hidden;
}

.session-list {
  @include scrollReset();
  height: calc(100% - 3em);
  display: grid;
  gap: 0.5em;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 2em;
  justify-items: start;
}

.list-item {
  height: 2em;
  overflow: hidden;
}

.add-button,
.clear-button,
.delete-button { width: auto; }

.add-button { @include position(absolute, $b: 0.25em, $r: 1.25em); }
.delete-button { @include position(absolute, $b: 1.75em, $l: 1.25em); }
.clear-button { @include position(absolute, $b: 0.25em, $l: 1.25em); }

.delete-alert {
  @include position(absolute, $b: 2.5rem, $r: 1.25rem);
  @include text(0.75em, 500, $c: var(--c-timer-not-ready));
}

</style>