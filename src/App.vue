<template>
  <TheAppbar />

  <router-view/>

  <p>{{ getCurrentSessionKey }}</p>
  <button @click="changeSession">change session</button>
  <p>{{ getCurrentScramble }}</p>
  <button @click="newScramble">Generate scramble</button>

  <p>{{ getSessionResults }}</p>
  <h5>{{ getFormattedTime(getAo5(getSessionResults, 0)) }}</h5>
  <ul>
    <li v-for="result in getSessionResults" :key="result.date">
      {{ getFormattedTime(result.time.value) }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TheAppbar from '@/components/TheAppbar.vue'

import useDB from '@/composables/useDB'
import useStore from '@/composables/useStore'
import useLocalStorage from './composables/useLocalStorage'
import useScrambleGenerator from './composables/useScrambleGenerator'
import useTimeFormatter from './composables/useTimeFormatter'
import useMath from './composables/useMath'

export default defineComponent({
  name: 'App',
  components: {
    TheAppbar
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

.wrapper {
  padding: 0 1em;
}

</style>
