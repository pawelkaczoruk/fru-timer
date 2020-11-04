<template>
  <header class="appbar">

    <div class="logo center-content">
      <svg
        class="logo-icon"
        viewBox="0 0 26.925 30.659"
      >
        <path
          d="M47.021,8.342c0-.014,0-.029,0-.043s0-.055-.006-.082,0-.025,0-.038c0-.036-.011-.072-.019-.107,0-.014-.007-.028-.01-.042s-.015-.057-.024-.085c0-.01-.006-.02-.009-.03-.013-.037-.027-.073-.043-.109l-.013-.03a1.391,1.391,0,0,0-.125-.217l-.019-.026c-.023-.031-.047-.062-.073-.091l-.022-.023c-.02-.022-.04-.043-.062-.063l-.031-.03c-.027-.024-.055-.048-.083-.07l-.031-.022-.068-.046-.037-.023-.016-.01L34.256.187a1.393,1.393,0,0,0-1.394,0L20.794,7.155l-.015.009-.039.024-.064.044-.034.024c-.029.022-.056.045-.082.069l-.033.031c-.021.02-.041.041-.06.062l-.023.024c-.026.029-.05.06-.073.091l-.019.027a1.386,1.386,0,0,0-.125.216l-.014.03c-.016.036-.03.072-.043.109,0,.01-.006.02-.009.03-.009.028-.017.056-.024.085s-.007.028-.01.042c-.007.035-.014.071-.019.107,0,.013,0,.025,0,.038s0,.054-.006.082,0,.029,0,.043,0,.013,0,.019V22.3a1.393,1.393,0,0,0,.7,1.207l12.069,6.968.017.009.038.02.075.036.034.015c.034.014.068.026.1.038l.041.012.086.022.031.007c.038.008.077.013.116.018l.032,0c.042,0,.083.006.125.006s.083,0,.125-.006l.032,0c.039,0,.078-.01.116-.018l.031-.007c.029-.006.058-.014.086-.022l.041-.012c.035-.011.069-.024.1-.038l.034-.015L34.2,30.5l.038-.02.017-.009L46.325,23.5a1.393,1.393,0,0,0,.7-1.207V8.362C47.021,8.355,47.021,8.349,47.021,8.342ZM33.559,3l9.281,5.359L33.559,13.72,24.278,8.362ZM22.884,10.775l9.281,5.359V26.851l-9.281-5.359ZM34.953,26.851V16.134l9.281-5.359V21.493Z"
          transform="translate(-20.097)"
        />
      </svg>
    </div>

    <nav class="nav center-content">
      <button
        class="nav-item center-content"
        v-if="currentRoute.fullPath === '/'"
        @click="generateScramble()"
      >
        <SvgIcon icon="reload" />
      </button>
      <router-link
        class="nav-item center-content"
        to="/"
        v-if="currentRoute.fullPath !== '/'"
      >
        <SvgIcon icon="home" />
      </router-link>
      <router-link
        class="nav-item center-content"
        to="/about"
        v-if="currentRoute.fullPath !== '/about'"
      >
        <SvgIcon icon="about" />
      </router-link>
      <router-link
        class="nav-item center-content"
        to="/settings"
        v-if="currentRoute.fullPath !== '/settings'"
      >
        <SvgIcon icon="settings" />
      </router-link>
    </nav>

  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import SvgIcon from './utility/SvgIcon.vue'
import useScrambleGenerator from '@/composables/scrambler/useScrambleGenerator'

export default defineComponent({
  name: 'TheAppbar',
  components: { SvgIcon },

  setup() {
    const { generateScramble } = useScrambleGenerator()
    const { currentRoute } = useRouter()

    return {
      generateScramble,
      currentRoute
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.appbar {
  @include rect(100%, 3.75em);
  @include flex(flex, space-between, center);
}

.logo { margin-left: 1.375em; }
.nav { margin-right: calc(1.375em - 0.9365em / 2); }

.nav-item {
  @include rect(2.5em, 2.5em, 50%);

  @include hover() {
    .nav-icon, .svg-icon {
      fill: var(--c-menu-icon-active);
      transition: all 0.15s ease-in-out;
    }
  }
}

.logo-icon {
  height: 2em;
  fill: var(--c-logo);
}

.nav-icon, .svg-icon {
  @include rect(1.5625em, 1.5625em);
  fill: var(--c-nav-icon);
  transition: all 0.4s ease-in-out;
}

</style>