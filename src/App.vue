<template>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useDB from '@/composables/useDB'

export default defineComponent({
  name: 'App',
  
  setup() {
    useDB()
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
