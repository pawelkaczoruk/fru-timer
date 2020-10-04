<template>
  <header class="wrapper">

    <div class="logo-container">
      <svg viewBox="0 0 30 30">
        <g transform="translate(-72 -6)">
          <rect
            width="9"
            height="19"
            rx="3"
            transform="translate(93 17)"
            fill="#cfad05"
          />
          <rect
            width="30"
            height="9"
            rx="3"
            transform="translate(72 6)"
            fill="#fff"
          />
          <rect
            width="19"
            height="19"
            rx="3"
            transform="translate(72 17)"
            fill="#22d83b"
          />
        </g>
      </svg>
    </div>

    <nav>
      <router-link
        class="nav-link"
        to="/about"
      >
        <svg viewBox="0 0 8.005 26">
          <path
            d="M-1349,18.188c0-4.314-3.625-7.811,3-7.811s3,3.5,3,7.811,3.658,7.812-3,7.812S-1349,22.5-1349,18.188ZM-1350,4a4,4,0,0,1,4-4,4,4,0,0,1,4,4,4,4,0,0,1-4,4A4,4,0,0,1-1350,4Z"
            transform="translate(1350)"
          />
        </svg>
      </router-link>
      <router-link
        class="nav-link"
        to="/settings"
      >
        <svg viewBox="0 0 26 26">
          <path
            d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
            transform="translate(1350)"
          />
        </svg>
      </router-link>
    </nav>

  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TheAppbar',
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

header {
  @include rect($width: 100%, $height: 3em, $background: var(--c-primary));
  @include flex($justify: space-between, $align: center);
}

.logo-container {
  @include flex($display: inline-flex, $align: center);

  svg {
    @include rect($width: 2em, $height: 2em);
  }
}

.nav-link {
  @include rect($width: 2.5em, $height: 2.5em, $radius: 50%);
  @include flex($display: inline-flex, $justify: center, $align: center);
  transition: background-color 0.15s ease-in-out;

  svg {
    @include rect($width: 1.8em, $height: 1.8em);
    fill: var(--c-text);
    transition: fill 0.15s ease-in-out;
  }

  @media screen and (min-width: 1024px) {
    &:hover {
      background: var(--c-dark-transparent);
      cursor: pointer;

      svg {
        fill: var(--c-light-transparent);
      }
    }
  }
}

</style>