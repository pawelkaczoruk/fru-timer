<template>
  <div
    class="home"
    ref="homeRef"
  >

    <transition name="fade">
      <TheScrambleDisplay v-if="getScrambleVisibility" />
    </transition>

    <TheTimerDisplay />

    <transition name="fade">
      <TheStatsDisplay v-if="getStatsVisibility" />
    </transition>

    <transition name="expand">
      <TheListDisplay v-if="getListVisibility" />
    </transition>

    <transition name="expand">
      <TheSessionMenu v-show="getSessionMenuVisibility" />
    </transition>

    <TheCommentModal v-if="getCommentModalVisibility" />
    <TheSessionModal v-if="getSessionModalVisibility" />

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, Ref } from 'vue'
import TheSessionMenu from '@/components/menu/expandables/TheSessionMenu.vue'
import TheTimerDisplay from '@/components/displays/TheTimerDisplay.vue'
import TheScrambleDisplay from '@/components/displays/TheScrambleDisplay.vue'
import TheStatsDisplay from '@/components/displays/TheStatsDisplay.vue'
import TheListDisplay from '@/components/list/TheListDisplay.vue'
import TheCommentModal from '@/components/modals/TheCommentModal.vue'
import TheSessionModal from '@/components/modals/TheSessionModal.vue'
import useTimer from '@/composables/useTimer'
import useConfig from '@/composables/store/useConfig'
import useMenuController from '@/composables/menu/useMenuController'

export default defineComponent({
  name: 'Home',
  components: {
    TheTimerDisplay,
    TheScrambleDisplay,
    TheStatsDisplay,
    TheListDisplay,
    TheCommentModal,
    TheSessionModal,
    TheSessionMenu
  },

  setup() {
    const { onPress, onRelease } = useTimer()
    const homeRef: Ref<HTMLDivElement | null> = ref(null)

    onMounted(() => {
      homeRef.value?.addEventListener('keydown', onPress)
      homeRef.value?.addEventListener('keyup', onRelease)
      homeRef.value?.addEventListener('touchstart', onPress)
      homeRef.value?.addEventListener('touchend', onRelease)
    })

    onUnmounted(() => {
      homeRef.value?.removeEventListener('keydown', onPress)
      homeRef.value?.removeEventListener('keyup', onRelease)
      homeRef.value?.removeEventListener('touchstart', onPress)
      homeRef.value?.removeEventListener('touchend', onRelease)
    })

    const {
      getListVisibility,
      getStatsVisibility,
      getScrambleVisibility
    } = useConfig()

    const {
      getCommentModalVisibility,
      getSessionModalVisibility,
      getSessionMenuVisibility
    } = useMenuController()

    return {
      homeRef,
      getListVisibility,
      getStatsVisibility,
      getScrambleVisibility,
      getCommentModalVisibility,
      getSessionModalVisibility,
      getSessionMenuVisibility
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.home { padding: 0 0.5em; }

.timer-display {
  @include position(fixed, $t: 50%, $l: 50%);
  transform: translate(-50%, -50%);
}

.scramble-display { @include animation(fade); }

.stats-display {
  @include position(fixed, $b: 5em, $l: 50%);
  transform: translateX(-50%);
  @include media(landscapeShort) { bottom: 0em; }
  @include animation(fade);
}

.list-display {
  @include position(fixed, $b: 4.6875em, $l: 50%);
  @include animation(expand);
  transform: translateX(-50%);
  @include media(big) {
    bottom: 0.625em;
    right: 0;
    left: unset;
    transform: unset;
  }
}

.session-menu {
  @include position(fixed, $b: 4.6875em, $l: 50%);
  transform: translateX(-50%);
  @include animation(expand);
}

</style>