<template>
  <div class="option-menu">

    <OptionButton
      :highlight="getLastSessionResult && !!getLastSessionResult.comment"
      icon="comment"
      @click="toggleCommentModal"
    />
    <OptionButton
      :highlight="getLastSessionResult && getLastSessionResult.time.penalty === ResultState.DNF"
      @click="toggleDnf"
    >dnf</OptionButton>
    <OptionButton
      :highlight="getLastSessionResult && getLastSessionResult.time.penalty === ResultState.PLUS_TWO"
      @click="togglePenalty"
    >+2</OptionButton>
    <OptionButton
      @click="removeLastResult"
      icon="trash"
    />

  </div>
</template>

<script lang="ts">
import { defineComponent, toRaw } from 'vue'
import OptionButton from '../buttons/OptionButton.vue'
import useSessionHistory from '@/composables/store/useSessionHistory'
import useSessionBests from '@/composables/store/useSessionBests'
import useMath from '@/composables/useMath'
import useSessionResults from '@/composables/store/useSessionResults'
import useDB from '@/composables/useDB'
import useConfig from '@/composables/store/useConfig'
import useMenuController from '@/composables/menu/useMenuController'
import useCurrentData from '@/composables/store/useCurrentData'
import { ResultState } from '@/types/Timer'

export default defineComponent({
  name: 'TheOptionMenu',
  components: { OptionButton },

  setup() {
    const { toggleCommentModal } = useMenuController()
    const { resetTime } = useCurrentData()

    const { findBest } = useMath()
    const { getCurrentSessionKey } = useConfig()

    const {
      getCurrentSingle,
      getCurrentMo3,
      getCurrentAo5,
      getCurrentAo12,
      getSessionHistory,
      addToSessionHistory,
      removeLastFromSessionHistory
    } = useSessionHistory()

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
      removeLastSessionResult
    } = useSessionResults()

    const {
      updateSession: updateSessionDB,
      updateResult: updateResultDB
    } = useDB()

    const setBests = () => {
      const latestSingle = toRaw(getCurrentSingle.value)
      const latestMo3 = toRaw(getCurrentMo3.value)
      const latestAo5 = toRaw(getCurrentAo5.value)
      const latestAo12 = toRaw(getCurrentAo12.value)

      removeLastSessionResult()
      removeLastFromSessionHistory()

      if (latestSingle === getBestSingle.value) setBestSingle(findBest(getSessionHistory.value.single))
      if (latestMo3 === getBestMo3.value) setBestMo3(findBest(getSessionHistory.value.mo3))
      if (latestAo5 === getBestAo5.value) setBestAo5(findBest(getSessionHistory.value.ao5))
      if (latestAo12 === getBestAo12.value) setBestAo12(findBest(getSessionHistory.value.ao12))
    }

    const removeLastResult = () => {
      if (!getSessionLength.value) return

      const results = toRaw(getSessionResults.value).slice(0, getSessionLength.value - 1)
      resetTime()
      updateSessionDB(getCurrentSessionKey.value, results)
      .then(() => { setBests() })
    }

    const togglePenalty = () => {
      if (!getSessionLength.value) return

      const lastResult = { ...toRaw(getLastSessionResult.value) }
      lastResult.time.penalty = lastResult.time.penalty === ResultState.PLUS_TWO ?
        ResultState.NO_PENALTY : ResultState.PLUS_TWO

      updateResultDB(getCurrentSessionKey.value, getSessionLength.value - 1, lastResult)
      .then(() => {
        setBests()
        addSessionResult(lastResult)
        addToSessionHistory(updateBests(lastResult.time, getSessionLength.value - 1))
      })
    }

    const toggleDnf = () => {
      if (!getSessionLength.value) return

      const lastResult = { ...toRaw(getLastSessionResult.value) }
      lastResult.time.penalty = lastResult.time.penalty === ResultState.DNF ?
        ResultState.NO_PENALTY : ResultState.DNF

      updateResultDB(getCurrentSessionKey.value, getSessionLength.value - 1, lastResult)
      .then(() => {
        setBests()
        addSessionResult(lastResult)
        addToSessionHistory(updateBests(lastResult.time, getSessionLength.value - 1))
      })
    }

    return {
      removeLastResult,
      togglePenalty,
      toggleDnf,
      toggleCommentModal,
      getLastSessionResult,
      ResultState
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.option-menu {
  pointer-events: none;
  display: grid;
  grid-template: ". second . third ." 2.8125em
                 "first . . . fourth" 2.8125em
                 / 2.8125em 2.8125em 1.125em 2.8125em 2.8125em;
}

.option-button {
  pointer-events: auto;

  &:first-child { grid-area: first; }
  &:nth-child(2) { grid-area: second; }
  &:nth-child(3) { grid-area: third; }
  &:nth-child(4) { grid-area: fourth; }
}

</style>