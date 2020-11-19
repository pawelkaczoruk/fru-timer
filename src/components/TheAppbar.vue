<template>
  <header class="appbar">

    <div class="logo center-content">
      <SvgIcon icon="sessions" />
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

.logo {
  margin-left: 1.375em;

  .svg-icon {
    @include rect(2em, 2em);
    fill: var(--c-logo);
  }
}
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

.svg-icon {
  @include rect(1.5625em, 1.5625em);
  fill: var(--c-nav-icon);
  transition: all 0.4s ease-in-out;
}

</style>