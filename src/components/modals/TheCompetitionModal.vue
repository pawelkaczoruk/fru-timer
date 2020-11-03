<template>
  <div class="competition-modal modal">

    <p class="modal-title">Online competitions are not yet available</p>

    <div class="button-container">
      <button
        class="modal-control-button"
        @click="toggleCompetitionModal()"
      >Close</button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useMenuController from '@/composables/menu/useMenuController'

export default defineComponent({
  name: 'TheCompetitionModal',

  setup() {
    const { toggleCompetitionModal } = useMenuController()

    return { toggleCompetitionModal }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.comment-input { @include rect(100%, 4em); }
.modal-title { margin-bottom: 3em; }
.button-container { justify-content: flex-end; }

</style>