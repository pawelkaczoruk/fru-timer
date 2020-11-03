<template>
  <div class="modal session-modal">

    <p class="modal-title">Add session</p>

    <div class="session-radios">
      <label
        class="radio-label center-content"
        v-for="{ key, cube } in getBasicConfig"
        :key="key"
      >
        <input
          class="radio-input"
          type="radio"
          v-model="cubeType"
          :value="cube"
        >
        <SvgIcon
          :class="cube === cubeType ? 'active' : ''"
          :icon="cube"
        />
      </label>
    </div>

    <input
      class="name-input"
      v-model="name"
      placeholder="Name here..."
    />
    
    <div class="button-container">
      <button
        class="modal-control-button"
        @click="toggleSessionModal()"
      >Cancel</button>
      <button
        class="modal-control-button"
        @click="addSession()"
      >Add</button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRaw } from 'vue'
import SvgIcon from '../utility/SvgIcon.vue'
import useMenuController from '@/composables/menu/useMenuController'
import useDB from '@/composables/useDB'
import useConfig from '@/composables/store/useConfig'
import useLocalStorage from '@/composables/useLocalStorage'

export default defineComponent({
  name: 'TheSessionModal',
  components: { SvgIcon },

  setup() {
    const { toggleSessionModal } = useMenuController()
    const { createSession: createSessionDB } = useDB()
    const { setCustomSessionsConfig } = useLocalStorage()
    const {
      addSessionConfig,
      getCustomSessionsConfig,
      setCurrentSessionKey,
      getBasicConfig
    } = useConfig()

    const name = ref('')
    const cubeType = ref('c3x3')

    const addSession = () => {
      const key = Date.now()

      createSessionDB(key)
      addSessionConfig({
        key,
        cube: toRaw(cubeType.value),
        name: toRaw(name.value)
      })
      setCustomSessionsConfig(getCustomSessionsConfig.value)
      setCurrentSessionKey(key)
      toggleSessionModal()
    }

    return {
      toggleSessionModal,
      name,
      addSession,
      getBasicConfig,
      cubeType
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.name-input { @include rect(100%, 2em); }

.svg-icon {
  height: 1.75em;
  fill: var(--c-menu-icon);
  transition: all 0.15s ease-in-out;

  &.active { fill: var(--c-menu-icon-active); }
}

.session-radios {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5em;
  margin-bottom: 1em;
}

.radio-input { display: none; }

.radio-label {
  @include rect(2em, 2em);
  @include hover() {
    .svg-icon { fill: var(--c-menu-icon-active); }
  }
}

</style>