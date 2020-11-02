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

    initializeSessions()
    fetchSession(getCurrentSessionKey.value)
    generateScramble()

    watch(getCurrentSessionKey, (key) => {
      setConfigLS(getConfig.value)
      resetBests()
      fetchSession(key)
      generateScramble()
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

</style>
