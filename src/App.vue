<template>
  <TheAppbar />

  <router-view/>

  <TheMenuBar />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheAppbar from '@/components/TheAppbar.vue'
import TheMenuBar from '@/components/TheMenuBar.vue'

import useDB from '@/composables/useDB'
import useStore from '@/composables/useStore'
import useLocalStorage from './composables/useLocalStorage'
import useScrambleGenerator from './composables/useScrambleGenerator'
import useTimeFormatter from './composables/useTimeFormatter'
import useMath from './composables/useMath'

export default defineComponent({
  name: 'App',
  components: {
    TheAppbar,
    TheMenuBar
  },
  
  setup() {
    const { initializeSessions, fetchSession } = useDB()
    const { getSessionResults, getCurrentSessionKey, setCurrentSessionKey, getConfig, getCurrentScramble } = useStore()
    const { generateScramble } = useScrambleGenerator()
    initializeSessions()
    fetchSession(getCurrentSessionKey.value)

    const { setConfigLS } = useLocalStorage()
    const changeSession = () => {
      setCurrentSessionKey(getCurrentSessionKey.value === 1 ? 2 : 1) 
      setConfigLS(getConfig.value)
      generateScramble()
      fetchSession(getCurrentSessionKey.value)
    }

    generateScramble()
    const newScramble = () => { generateScramble() }

    const { getFormattedTime } = useTimeFormatter()


    const { getAo5, getSessionMean, getAo12, getMo3 } = useMath()

    return {
      getSessionResults,
      getCurrentSessionKey,
      changeSession,
      newScramble,
      getCurrentScramble,
      getFormattedTime,
      getAo5, getSessionMean, getAo12, getMo3
    }
  }
})
</script>

<style lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/reset';
@import '@/assets/styles/mixins';

#app {
  @include flex($direction: column);
  height: 100vh;

  .home {
    flex-grow: 1;
  }
}

.wrapper {
  padding: 0 1rem;
}

.btn {
  @include flex($display: inline-flex, $justify: center, $align: center);
  @include rect(3em, 3em);
  @include background(var(--c-primary), var(--c-dark-transparent));
  @include hover() {
    cursor: pointer;
    svg { fill: var(--c-light-transparent); }    
  }

  &.rounded { border-radius: 50%; }
  &.top-right-rounded { border-radius: 0 50% 0 0; }
  &.top-left-rounded { border-radius: 50% 0 0 0; }

  svg {
    @include rect(60%, 60%);
    fill: var(--c-text);
    transition: fill 0.15s ease-in-out;
  }
}

</style>
