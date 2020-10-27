<template>
  <div class="modal-content">

    <p class="modal-title">Comment</p>
    <textarea v-model="comment"></textarea>
    <div class="button-container">
      <button
        class="modal-button"
        @click="toggleModal"
      >Cancel</button>
      <button
        class="modal-button"
        @click="addComment"
      >Save</button>
    </div>

  </div>
</template>

<script lang="ts">
import useConfig from '@/composables/store/useConfig'
import useSessionResults from '@/composables/store/useSessionResults'
import useDB from '@/composables/useDB'
import { defineComponent, inject, onMounted, ref, toRaw } from 'vue'

export default defineComponent({
  name: 'TheCommentModal',

  setup() {
    const toggleModal = inject<() => void>('toggleCommentModal')

    const { getCurrentSessionKey } = useConfig()
    const { updateResult: updateResultDB } = useDB()
    const {
      getSessionLength,
      getLastSessionResult,
      updateLastSessionResult
    } = useSessionResults()


    const comment = ref('')

    onMounted(() => {
      comment.value = getLastSessionResult.value.comment
    })

    const addComment = () => {
      const lastResult = { ...toRaw(getLastSessionResult.value) }
      lastResult.comment = comment.value

      updateResultDB(getCurrentSessionKey.value, getSessionLength.value - 1, lastResult)
      .then(() => {
        updateLastSessionResult(lastResult)
        if (toggleModal) toggleModal()
      })
    }

    return {
      toggleModal,
      comment,
      addComment
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.modal-content {
  textarea {
    @include rect(100%, 4em, 0.25em);
    padding: 0.2em;
  }
}

</style>