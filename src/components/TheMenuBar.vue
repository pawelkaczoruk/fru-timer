<template>
  <div class="menu-bar">
    <div class="btn-group left">
      <button class="btn">
        <svg viewBox="0 0 26 26">
          <path
            d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
            transform="translate(1350)"
          />
        </svg>
      </button>
      <button class="btn top-right-rounded">
        <svg viewBox="0 0 26 26">
          <path
            d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
            transform="translate(1350)"
          />
        </svg>
      </button>
    </div>

    <button
      class="btn rounded btn-central"
      @click="toggleCentralMenu"
    >
      <svg viewBox="0 0 26 26">
        <path
          d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
          transform="translate(1350)"
        />
      </svg>
    </button>

    <div class="btn-group right">
      <button class="btn top-left-rounded">
        <svg viewBox="0 0 26 26">
          <path
            d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
            transform="translate(1350)"
          />
        </svg>
      </button>
      <button class="btn">
        <svg viewBox="0 0 26 26">
          <path
            d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
            transform="translate(1350)"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="isCentralMenuExpanded"
      class="expandable-central-menu"
    >
      <button
        class="btn rounded"
        @click="toggleCommentModal"
      >
        <svg viewBox="0 0 26 26">
          <path
            d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
            transform="translate(1350)"
          />
        </svg>
      </button>
      <button
        class="btn rounded"
        @click="toggleDnf"
      >
        <svg viewBox="0 0 26 26">
          <path
            d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
            transform="translate(1350)"
          />
        </svg>
      </button>
      <button
        class="btn rounded"
        @click="togglePenalty"
      >
        <svg viewBox="0 0 26 26">
          <path
            d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
            transform="translate(1350)"
          />
        </svg>
      </button>
      <button
        class="btn rounded"
        @click="removeLastResult"
      >
        <svg viewBox="0 0 26 26">
          <path
            d="M-1338,26a2,2,0,0,1-2-2v-.413a10.859,10.859,0,0,1-2.365-.98l-.513.513a2,2,0,0,1-2.829,0l-1.414-1.414a2,2,0,0,1,0-2.829l.513-.513a10.859,10.859,0,0,1-.98-2.365H-1348a2,2,0,0,1-2-2V12a2,2,0,0,1,2-2h.412a10.868,10.868,0,0,1,.98-2.366l-.513-.513a2,2,0,0,1,0-2.829l1.414-1.414a2,2,0,0,1,2.829,0l.513.513a10.859,10.859,0,0,1,2.365-.98V2a2,2,0,0,1,2-2h2a2,2,0,0,1,2,2v.412a10.857,10.857,0,0,1,2.365.98l.513-.513a2,2,0,0,1,2.829,0l1.414,1.414a2,2,0,0,1,0,2.829l-.513.513a10.859,10.859,0,0,1,.979,2.365h.413a2,2,0,0,1,2,2v2a2,2,0,0,1-2,2h-.413a10.855,10.855,0,0,1-.98,2.365l.513.513a2,2,0,0,1,0,2.829l-1.414,1.414a2,2,0,0,1-2.829,0l-.513-.513a10.853,10.853,0,0,1-2.365.98V24a2,2,0,0,1-2,2Zm-5-13a6.007,6.007,0,0,0,6,6,6.007,6.007,0,0,0,6-6,6.007,6.007,0,0,0-6-6A6.007,6.007,0,0,0-1343,13Z"
            transform="translate(1350)"
          />
        </svg>
      </button>
    </div>

    <teleport
      v-if="isModalOpen"
      to="#modal"
    >
      <div class="modal-content">
        <p class="title">Comment</p>
        <textarea v-model="comment"></textarea>
        <div class="btn-container">
          <button
            class="modal-btn"
            @click="toggleCommentModal"
          >Cancel</button>
          <button
            class="modal-btn"
            @click="addComent"
          >Save</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRaw } from 'vue'
import useDB from '@/composables/useDB'
import useStore from '@/composables/useStore'
import useMath from '@/composables/useMath'

export default defineComponent({
  name: 'TheMenuBar',

  setup() {
    const isCentralMenuExpanded = ref(false);
    const toggleCentralMenu = () => { isCentralMenuExpanded.value = !isCentralMenuExpanded.value  }

    const { removeResult, updateResult } = useDB()
    const {
      getSessionResults,
      removeLastSessionResult,
      getCurrentSessionKey,
      getLastResult,
      getCurrentSessionLength,
      updateLastResult,
      getBestSingle,
      getBestMo3,
      getBestAo5,
      getBestAo12,
      getCurrentSingle,
      getCurrentMo3,
      getCurrentAo5,
      getCurrentAo12,
      getSessionHistory,
      setBestSingle,
      setBestMo3,
      setBestAo5,
      setBestAo12,
      removeLastFromHistory,
      addToSessionHistory,
      addSessionResult,
      updateBests
    } = useStore()
    const { findBest } = useMath()

    const setBests = () => {
      const latestSingle = getCurrentSingle.value
      const latestMo3 = getCurrentMo3.value
      const latestAo5 = getCurrentAo5.value
      const latestAo12 = getCurrentAo12.value

      removeLastFromHistory()

      if (latestSingle === getBestSingle.value) setBestSingle(findBest(getSessionHistory.value.single))
      if (latestMo3 === getBestMo3.value) setBestMo3(findBest(getSessionHistory.value.mo3))
      if (latestAo5 === getBestAo5.value) setBestAo5(findBest(getSessionHistory.value.ao5))
      if (latestAo12 === getBestAo12.value) setBestAo12(findBest(getSessionHistory.value.ao12))
    }

    const removeLastResult = () => {
      toggleCentralMenu()
      if (!getCurrentSessionLength.value) return

      const modifiedSession = toRaw(getSessionResults.value).slice(0, getCurrentSessionLength.value - 1)

      removeResult(getCurrentSessionKey.value, modifiedSession)
        .then(() => {
          removeLastSessionResult()
          setBests()
        })
    }

    const togglePenalty = () => {
      toggleCentralMenu()
      if (!getCurrentSessionLength.value) return

      const lastResult = getLastResult.value
      if (lastResult.time.penalty === 2000) lastResult.time.penalty = 0
      else lastResult.time.penalty = 2000

      updateResult(getCurrentSessionKey.value, getCurrentSessionLength.value - 1, toRaw(getLastResult.value))
        .then(() => {
          removeLastSessionResult()
          setBests()
          addSessionResult(lastResult)
          addToSessionHistory(updateBests(lastResult.time, getCurrentSessionLength.value - 1))
        })
    }

    const toggleDnf = () => {
      toggleCentralMenu()
      if (!getCurrentSessionLength.value) return

      const lastResult = getLastResult.value
      if (lastResult.time.penalty === -1) lastResult.time.penalty = 0
      else lastResult.time.penalty = -1

      updateResult(getCurrentSessionKey.value, getCurrentSessionLength.value - 1, toRaw(getLastResult.value))
        .then(() => {
          removeLastSessionResult()
          setBests()
          addSessionResult(lastResult)
          addToSessionHistory(updateBests(lastResult.time, getCurrentSessionLength.value - 1))
        })
    }

    const isModalOpen = ref(false)
    const comment = ref('')
    const toggleCommentModal = () => {
      isCentralMenuExpanded.value = false;
      if (!getCurrentSessionLength.value) return

      isModalOpen.value = !isModalOpen.value
      if (isModalOpen.value) comment.value = getLastResult.value.comment
    }

    const addComent = () => {
      const lastResult = getLastResult.value
      lastResult.comment = comment.value

      updateResult(getCurrentSessionKey.value, getCurrentSessionLength.value - 1, toRaw(getLastResult.value))
        .then(() => {
          updateLastResult(lastResult)
          toggleCommentModal()
        })
    }

    return {
      toggleCentralMenu,
      isCentralMenuExpanded,
      removeLastResult,
      togglePenalty,
      toggleDnf,
      addComent,
      isModalOpen,
      toggleCommentModal,
      comment
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.menu-bar {
  @include rect(100%, 3em);
  @include position(fixed, $bottom: 0);
}

.btn {
  @include background(var(--c-menu), var(--c-dark-transparent));
}

.btn-group {
  height: 3em;
  position: absolute;

  &.right { right: 0; }
  &.left { left: 0; }
}

.btn-central {
  @include rect(3.375em, 3.375em);
  @include position(absolute, $left: 50%);
  transform: translate(-50%, -1.5em);
}

.expandable-central-menu {
  @include position(absolute, $left: 50%);
  pointer-events: none;
  transform: translate(-50%, -4.875em);
  display: grid;
  grid-template: ". second . third ." 2.5em
                 "first . . . fourth" 2.5em
                 / 2.5em 2.5em 1em 2.5em 2.5em;

  .btn {
    @include rect(2.5em, 2.5em);
    pointer-events: auto;

    &:first-child { grid-area: first; }
    &:nth-child(2) { grid-area: second; }
    &:nth-child(3) { grid-area: third; }
    &:nth-child(4) { grid-area: fourth; }
  }
}

.modal-content {
  textarea {
    @include rect(100%, 4em, 0.25em);
    padding: 0.2em;
  }
}

</style>