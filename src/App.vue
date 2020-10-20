<template>
  <TheAppbar />

  <router-view/>

  <TheMenuBar />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'

import TheAppbar from './components/TheAppbar.vue'
import TheMenuBar from './components/TheMenuBar.vue'

import useConfig from './composables/store/useConfig'
import useSessionBests from './composables/store/useSessionBests'
import useDB from './composables/useDB'
import useLocalStorage from './composables/useLocalStorage'
import useScrambleGenerator from './composables/useScrambleGenerator'

export default defineComponent({
  name: 'App',
  components: {
    TheAppbar,
    TheMenuBar
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
  background: linear-gradient(
    180deg,
    var(--c-bg-first) 0%,
    var(--c-bg-second) 75%,
    var(--c-bg-second) 100%);

  .home { flex-grow: 1; }
}

.center-content {
  @include flex(inline-flex, center, center);
}

// below to be changed
#modal {
  @include position(fixed, 50%, $left: 50%);
  transform: translate(-50%, -50%);

  .modal-content {
    min-width: 300px;
    padding: 1em 1em;
    border-radius: 0.5em;
    background:var(--c-primary);
  }

  .modal-title {
    @include text(1.25em, $align: center);
    margin-bottom: 0.5em;
  }

  .button-container {
    @include flex(flex, space-between);
    margin-top: 0.5em;
  }

  .modal-button {
    border-bottom: 2px solid var(--c-text);
    font-weight: bold;

    @include hover() {
      cursor: pointer;
      color: var(--c-light-transparent);
      border-bottom: 2px solid var(--c-light-transparent);
    }
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
