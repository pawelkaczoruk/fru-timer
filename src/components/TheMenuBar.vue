<template>
  <div class="menubar">

    <button
      class="home-button center-content"
      :class="isOptionMenuVisible ? 'active' : ''"
      @click="toggleOptionMenuVisibility"
    >
      <svg
        class="menu-icon"
        viewBox="0 0 38.711 38.729"
      >
        <g transform="translate(-0.078)">
          <path
            d="M33.126,5.672A19.364,19.364,0,0,0,5.741,33.057,19.364,19.364,0,0,0,33.126,5.672Zm-2.489,24.9A15.844,15.844,0,0,1,8.23,8.161,15.844,15.844,0,0,1,30.637,30.568Z"
            transform="translate(0)"
          />
          <path
            d="M82.885,70.562h-8.8v-8.8a1.76,1.76,0,1,0-3.521,0v8.8h-8.8a1.76,1.76,0,1,0,0,3.521h8.8v8.8a1.76,1.76,0,1,0,3.521,0v-8.8h8.8a1.76,1.76,0,0,0,0-3.521Z"
            transform="translate(-52.889 -52.958)"
          />
        </g>
      </svg>
    </button>

    <div class="button-bar">
      <div>
        <button class="menu-button center-content">
          <svg
            class="menu-icon"
            viewBox="0 0 36.093 27.353"
          >
            <g transform="translate(0 -61.992)">
              <g transform="translate(0 61.992)">
                <path
                  d="M36.036,87.807,33.2,79a1.177,1.177,0,0,0-.552-.669l-5.79-3.193a6.487,6.487,0,0,0,1.035-3.536V68.538a6.541,6.541,0,0,0-9.841-5.652,6.477,6.477,0,0,0-3.3-.894A6.553,6.553,0,0,0,8.2,68.538v3.068a6.487,6.487,0,0,0,1.036,3.537l-5.79,3.193A1.177,1.177,0,0,0,2.9,79l-2.838,8.8a1.178,1.178,0,0,0,1.12,1.538H34.915A1.178,1.178,0,0,0,36.036,87.807ZM17.154,68.538a4.192,4.192,0,1,1,8.383,0v3.068a4.192,4.192,0,0,1-8.383,0Zm-2.407-4.192a4.185,4.185,0,0,1,1.383.232,6.52,6.52,0,0,0-1.33,3.96v3.068a6.512,6.512,0,0,0,1.034,3.537l-1.183.652a4.186,4.186,0,0,1-4.1-4.19V68.538h0A4.2,4.2,0,0,1,14.747,64.346ZM2.793,86.991l2.2-6.82,5.915-3.262a6.952,6.952,0,0,0,.812.5l-1.674.923A1.178,1.178,0,0,0,9.494,79L6.919,86.991H2.793Zm6.6,0,2.2-6.82,5.916-3.263a6.556,6.556,0,0,0,7.677,0L31.1,80.171l2.2,6.82H9.392Z"
                  transform="translate(0 -61.992)"
                />
              </g>
            </g>
          </svg>
        </button>
        <button
          class="menu-button center-content"
          @click="showStatsDisplay()"
        >
          <svg
            class="menu-icon"
            viewBox="0 0 27.384 27.384"
          >
            <path d="M1.245,4.979h8.927a3.733,3.733,0,0,0,7.04,0H26.14a1.245,1.245,0,1,0,0-2.489H17.212a3.733,3.733,0,0,0-7.04,0H1.245a1.245,1.245,0,0,0,0,2.489ZM13.692,2.489a1.245,1.245,0,1,1-1.245,1.245A1.246,1.246,0,0,1,13.692,2.489Z" />
            <path
              d="M26.14,122.489H19.7a3.733,3.733,0,0,0-7.04,0H1.245a1.245,1.245,0,0,0,0,2.489H12.662a3.733,3.733,0,0,0,7.04,0H26.14a1.245,1.245,0,0,0,0-2.489Zm-9.958,2.489a1.245,1.245,0,1,1,1.245-1.245A1.246,1.246,0,0,1,16.182,124.979Z"
              transform="translate(0 -110.042)"
            />
            <path
              d="M26.14,242.489H14.723a3.733,3.733,0,0,0-7.04,0H1.245a1.245,1.245,0,0,0,0,2.489H7.683a3.733,3.733,0,0,0,7.04,0H26.14a1.245,1.245,0,1,0,0-2.489ZM11.2,244.979a1.245,1.245,0,1,1,1.245-1.245A1.246,1.246,0,0,1,11.2,244.979Z"
              transform="translate(0 -220.084)"
            />
          </svg>
        </button>
      </div>

      <div>
        <button class="menu-button center-content">
          <svg
            class="menu-icon"
            viewBox="0 0 27.171 26.186"
          >
            <g transform="translate(0 -30)">
              <path
                d="M61.186,32.91h18.98a1.485,1.485,0,0,0,0-2.91H61.186a1.485,1.485,0,0,0,0,2.91Z"
                transform="translate(-54.181)"
              />
              <path
                d="M80.166,150H61.186a1.485,1.485,0,0,0,0,2.91h18.98a1.485,1.485,0,0,0,0-2.91Z"
                transform="translate(-54.181 -108.362)"
              />
              <path
                d="M80.166,270H61.186a1.485,1.485,0,0,0,0,2.91h18.98a1.485,1.485,0,0,0,0-2.91Z"
                transform="translate(-54.181 -216.723)"
              />
              <path d="M1.455,30a1.455,1.455,0,1,0,1.029,2.484A1.455,1.455,0,0,0,1.455,30Z" />
              <path
                d="M1.455,150a1.455,1.455,0,1,0,1.029,2.484A1.455,1.455,0,0,0,1.455,150Z"
                transform="translate(0 -108.362)"
              />
              <path
                d="M1.455,270a1.455,1.455,0,1,0,1.029,2.484A1.455,1.455,0,0,0,1.455,270Z"
                transform="translate(0 -216.723)"
              />
            </g>
          </svg>
        </button>
        <button class="menu-button center-content">
          <svg
            class="menu-icon"
            viewBox="0 0 26.925 30.659"
          >
            <path
              d="M47.021,8.342c0-.014,0-.029,0-.043s0-.055-.006-.082,0-.025,0-.038c0-.036-.011-.072-.019-.107,0-.014-.007-.028-.01-.042s-.015-.057-.024-.085c0-.01-.006-.02-.009-.03-.013-.037-.027-.073-.043-.109l-.013-.03a1.391,1.391,0,0,0-.125-.217l-.019-.026c-.023-.031-.047-.062-.073-.091l-.022-.023c-.02-.022-.04-.043-.062-.063l-.031-.03c-.027-.024-.055-.048-.083-.07l-.031-.022-.068-.046-.037-.023-.016-.01L34.256.187a1.393,1.393,0,0,0-1.394,0L20.794,7.155l-.015.009-.039.024-.064.044-.034.024c-.029.022-.056.045-.082.069l-.033.031c-.021.02-.041.041-.06.062l-.023.024c-.026.029-.05.06-.073.091l-.019.027a1.386,1.386,0,0,0-.125.216l-.014.03c-.016.036-.03.072-.043.109,0,.01-.006.02-.009.03-.009.028-.017.056-.024.085s-.007.028-.01.042c-.007.035-.014.071-.019.107,0,.013,0,.025,0,.038s0,.054-.006.082,0,.029,0,.043,0,.013,0,.019V22.3a1.393,1.393,0,0,0,.7,1.207l12.069,6.968.017.009.038.02.075.036.034.015c.034.014.068.026.1.038l.041.012.086.022.031.007c.038.008.077.013.116.018l.032,0c.042,0,.083.006.125.006s.083,0,.125-.006l.032,0c.039,0,.078-.01.116-.018l.031-.007c.029-.006.058-.014.086-.022l.041-.012c.035-.011.069-.024.1-.038l.034-.015L34.2,30.5l.038-.02.017-.009L46.325,23.5a1.393,1.393,0,0,0,.7-1.207V8.362C47.021,8.355,47.021,8.349,47.021,8.342ZM33.559,3l9.281,5.359L33.559,13.72,24.278,8.362ZM22.884,10.775l9.281,5.359V26.851l-9.281-5.359ZM34.953,26.851V16.134l9.281-5.359V21.493Z"
              transform="translate(-20.097)"
            />
          </svg>
        </button>
      </div>
    </div>

    <transition name="grow">
      <div
        v-if="isOptionMenuVisible"
        class="option-menu"
      >
        <button
          class="option-button center-content"
          @click="toggleCommentModal"
        >
          <svg
            class="menu-icon"
            viewBox="0 0 26 26"
          >
            <path
              d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
              transform="translate(1350)"
            />
          </svg>
        </button>
        <button
          class="option-button center-content"
          @click="toggleDnf"
        >
          <svg
            class="menu-icon"
            viewBox="0 0 26 26"
          >
            <path
              d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
              transform="translate(1350)"
            />
          </svg>
        </button>
        <button
          class="option-button center-content"
          @click="togglePenalty"
        >
          <svg
            class="menu-icon"
            viewBox="0 0 26 26"
          >
            <path
              d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
              transform="translate(1350)"
            />
          </svg>
        </button>
        <button
          class="option-button center-content"
          @click="removeLastResult"
        >
          <svg
            class="menu-icon"
            viewBox="0 0 26 26"
          >
            <path
              d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
              transform="translate(1350)"
            />
          </svg>
        </button>
      </div>
    </transition>

    <teleport
      v-if="isModalOpen"
      to="#modal"
    >
      <div class="modal-content">
        <p class="modal-title">Comment</p>
        <textarea v-model="comment"></textarea>
        <div class="button-container">
          <button
            class="modal-button"
            @click="toggleCommentModal"
          >Cancel</button>
          <button
            class="modal-button"
            @click="addComent"
          >Save</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRaw } from 'vue'

import useConfig from '@/composables/store/useConfig'
import useDB from '@/composables/useDB'
import useLocalStorage from '@/composables/useLocalStorage'
import useSessionBests from '@/composables/store/useSessionBests'
import useSessionHistory from '@/composables/store/useSessionHistory'
import useSessionResults from '@/composables/store/useSessionResults'
import useMath from '@/composables/useMath'

import { ResultState } from '@/types/Timer'

export default defineComponent({
  name: 'TheMenuBar',

  setup() {
    const isOptionMenuVisible = ref(false);
    const toggleOptionMenuVisibility = () => { isOptionMenuVisible.value = !isOptionMenuVisible.value  }

    const {
      updateSession: updateSessionDB,
      updateResult: updateResultDB
    } = useDB()
    const { getCurrentSessionKey, toggleStatsVisibility, getConfig } = useConfig()
    const { findBest } = useMath()
    const { setConfig: setConfigLS } = useLocalStorage()

    const {
      getBestSingle,
      setBestSingle,
      getBestMo3,
      setBestMo3,
      getBestAo5,
      setBestAo5,
      getBestAo12,
      setBestAo12,
      updateBests
    } = useSessionBests()

    const {
      getSessionLength,
      getSessionResults,
      getLastSessionResult,
      addSessionResult,
      updateLastSessionResult,
      removeLastSessionResult
    } = useSessionResults()

    const {
      getCurrentSingle,
      getCurrentMo3,
      getCurrentAo5,
      getCurrentAo12,
      getSessionHistory,
      addToSessionHistory,
      removeLastFromSessionHistory
    } = useSessionHistory()

    const setBests = () => {
      const latestSingle = getCurrentSingle.value
      const latestMo3 = getCurrentMo3.value
      const latestAo5 = getCurrentAo5.value
      const latestAo12 = getCurrentAo12.value

      removeLastFromSessionHistory()

      if (latestSingle === getBestSingle.value) setBestSingle(findBest(getSessionHistory.value.single))
      if (latestMo3 === getBestMo3.value) setBestMo3(findBest(getSessionHistory.value.mo3))
      if (latestAo5 === getBestAo5.value) setBestAo5(findBest(getSessionHistory.value.ao5))
      if (latestAo12 === getBestAo12.value) setBestAo12(findBest(getSessionHistory.value.ao12))
    }

    const removeLastResult = () => {
      toggleOptionMenuVisibility()
      if (!getSessionLength.value) return

      const results = toRaw(getSessionResults.value).slice(0, getSessionLength.value - 1)

      updateSessionDB(getCurrentSessionKey.value, results)
      .then(() => {
        removeLastSessionResult()
        setBests()
      })
    }

    const togglePenalty = () => {
      toggleOptionMenuVisibility()
      if (!getSessionLength.value) return

      const lastResult = getLastSessionResult.value
      lastResult.time.penalty = lastResult.time.penalty === ResultState.PLUS_TWO ?
        ResultState.NO_PENALTY : ResultState.PLUS_TWO

      updateResultDB(getCurrentSessionKey.value, getSessionLength.value - 1, toRaw(getLastSessionResult.value))
      .then(() => {
        removeLastSessionResult()
        setBests()
        addSessionResult(lastResult)
        addToSessionHistory(updateBests(lastResult.time, getSessionLength.value - 1))
      })
    }

    const toggleDnf = () => {
      toggleOptionMenuVisibility()
      if (!getSessionLength.value) return

      const lastResult = getLastSessionResult.value
      lastResult.time.penalty = lastResult.time.penalty === ResultState.DNF ?
        ResultState.NO_PENALTY : ResultState.DNF

      updateResultDB(getCurrentSessionKey.value, getSessionLength.value - 1, toRaw(getLastSessionResult.value))
      .then(() => {
        removeLastSessionResult()
        setBests()
        addSessionResult(lastResult)
        addToSessionHistory(updateBests(lastResult.time, getSessionLength.value - 1))
      })
    }

    const isModalOpen = ref(false)
    const comment = ref('')
    const toggleCommentModal = () => {
      isOptionMenuVisible.value = false;
      if (!getSessionLength.value) return

      isModalOpen.value = !isModalOpen.value
      if (isModalOpen.value) comment.value = getLastSessionResult.value.comment
    }

    const addComent = () => {
      const lastResult = getLastSessionResult.value
      lastResult.comment = comment.value

      updateResultDB(getCurrentSessionKey.value, getSessionLength.value - 1, toRaw(getLastSessionResult.value))
      .then(() => {
        updateLastSessionResult(lastResult)
        toggleCommentModal()
      })
    }

    const showStatsDisplay = () => {
      toggleStatsVisibility()
      setConfigLS(getConfig.value)
    }

    return {
      toggleOptionMenuVisibility,
      isOptionMenuVisible,
      removeLastResult,
      togglePenalty,
      toggleDnf,
      addComent,
      isModalOpen,
      toggleCommentModal,
      comment,
      showStatsDisplay
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.menubar {
  @include position(fixed, $left: 50%, $bottom: 0);
  transform: translateX(-50%);
  width: 100%;
  max-width: 22.5em;
  margin-bottom: 0.625em;
  padding: 0 0.5em;
}

.button-bar {
  @include flex(flex, space-between, center);
  border-radius: 0.75em;
  overflow: hidden;
  background: var(--c-menu);
}

.menu-button {
  @include rect(3.5625em, 3.5625em);

  .menu-icon {
    height: 1.75em;
    fill: var(--c-menu-icon);
  }
}

.home-button {
  @include rect(4.25em, 4.25em, 0.9375em, var(--c-menu));
  @include position(absolute, $bottom: 0, $left: 50%, $z-index: 10);
  transform: translate(-50%, -1.0625em);
  box-shadow: 0 0 0 0.5625em var(--c-bg-second);
  transition: all 0.4s ease-in-out;

  .menu-icon {
    height: 2.375em;
    fill: var(--c-menu-icon-active);
    transition: all 0.4s ease-in-out;
  }

  &.active {
    transform: translate(-50%, -2.25em);
    background: var(--c-menu-icon-active);

    .menu-icon {
      fill: var(--c-menu);
      transform: rotate(45deg);
    }
  }
}

.option-menu {
  @include position(absolute, $bottom: 0, $left: 50%);
  transform: translate(-50%, -4.875em);
  pointer-events: none;
  display: grid;
  grid-template: ". second . third ." 2.5em
                 "first . . . fourth" 2.5em
                 / 2.5em 2.5em 1em 2.5em 2.5em;

  &.grow-enter-active,
  &.grow-leave-active {
    transition: transform 0.4s ease-in-out;
  }
  &.grow-enter-from,
  &.grow-leave-to {
    transform: translate(-50%, -1.875em) scale(0.2);
    
  }
}

.option-button {
  @include rect(2.5em, 2.5em, 50%, var(--c-menu));
  pointer-events: auto;

  &:first-child { grid-area: first; }
  &:nth-child(2) { grid-area: second; }
  &:nth-child(3) { grid-area: third; }
  &:nth-child(4) { grid-area: fourth; }

  .menu-icon {
    height: 1.75em;
    fill: var(--c-menu-icon);
  }
}


.modal-content {
  textarea {
    @include rect(100%, 4em, 0.25em);
    padding: 0.2em;
  }
}

</style>