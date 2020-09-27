<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useDB from '@/composables/useDB'
import useStore from '@/composables/useStore'

export default defineComponent({
  name: 'App',
  
  setup() {
    const { initializeSessions, fetchSession } = useDB()
    const { getSessionResults } = useStore()
    fetchSession(1)
    setTimeout(() => console.log(getSessionResults.value), 5000)
    initializeSessions()
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
