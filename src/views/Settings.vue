<template>
  <div class="settings">

    <h1>Settings</h1>
    <p>coming soon...</p>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ name: 'Settings' })
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.settings { color: var(--c-text-secondary); }

h1 { @include text(2em, 500, center); }

p {
  margin-top: 1em;
  @include text(1.25em, 400, center);
}

</style>