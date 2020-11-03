<template class="darken">
  <TheAppbar />

  <router-view/>

  <TheMenu />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'

import TheAppbar from './components/TheAppbar.vue'
import TheMenu from './components/menu/TheMenu.vue'

import useConfig from './composables/store/useConfig'
import useSessionBests from './composables/store/useSessionBests'
import useDB from './composables/useDB'
import useLocalStorage from './composables/useLocalStorage'
import useScrambleGenerator from './composables/scrambler/useScrambleGenerator'
import useCurrentData from './composables/store/useCurrentData'

export default defineComponent({
  name: 'App',
  components: {
    TheAppbar,
    TheMenu
  },
  
  setup() {
    const { initializeSessions, fetchSession } = useDB()
    const { getCurrentSessionKey, getConfig } = useConfig()
    const { generateScramble } = useScrambleGenerator()
    const { setConfig: setConfigLS } = useLocalStorage()
    const { resetBests } = useSessionBests()
    const { resetTime } = useCurrentData()

    initializeSessions()
    fetchSession(getCurrentSessionKey.value)
    generateScramble()

    watch(getCurrentSessionKey, (key) => {
      setConfigLS(getConfig.value)
      resetBests()
      fetchSession(key)
      generateScramble()
      resetTime()
    })
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/fonts';
@import '@/assets/styles/variables';
@import '@/assets/styles/reset';
@import '@/assets/styles/mixins';

#app {
  @include flex($direction: column);
  height: 100vh;
  background: var(--c-bg);

  .home { flex-grow: 1; }
}

.center-content {
  @include flex(inline-flex, center, center);
}

.modal {
  @include position(fixed, 50%, $l: 50%);
  transform: translate(-50%, -50%);
  @include shadow();
  min-width: 300px;
  padding: 1em;
  border-radius: 0.75em;
  background: var(--c-menu);
  color: var(--c-text-secondary);
  z-index: 50;

  .button-container {
    @include flex(flex, space-between);
    margin-top: 1rem;
  }

  .modal-control-button {
    font-weight: bold;
    @include hover() { color: var(--c-menu-icon-active); }
  }

  .modal-title {
    @include text(1.25em, $a: center, $w: 500);
    margin-bottom: 1rem;
  }
}


</style>
