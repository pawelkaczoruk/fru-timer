<template>
  <div class="about">

    <h1>About</h1>

    <p>this subpage will be changed soon...</p>
    <p>upcoming features/changes:</p>

    <ul>
      <li>settings subpage (color palette, font sizes, etc.)</li>
      <li>about subpage</li>
      <li>square1 and clock scramble generator</li>
      <li>3x3 mbld - setting number of scrambles</li>
      <li>metronome</li>
      <li>preinspection</li>
      <li>stackmat support</li>
      <li>shortcuts</li>
      <li>chart</li>
      <li>scrambled cube display</li>
      <li>modal for full avarage components data</li>
      <li>online competitions</li>
      <li>modal for manual adding times for these who prefer using stackmat alone</li>
      <li>replace all svg's with SvgIcon component</li>
    </ul>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({ name: 'About' })
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.about {
  @include flex(flex, $align: center, $direction: column);
  color: var(--c-text-secondary);
  overflow: hidden;
}

h1 {
  @include text(2em, 500, center);
}

p {
  margin-top: 1em;
  @include text(1.25em, 400, center);
}

ul {
  padding: 1em 2em;

  li { list-style: disc; }
}

</style>