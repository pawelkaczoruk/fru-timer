<template>
  <div class="comment-modal modal">

    <p class="modal-title">Comment</p>
    <textarea
      class="comment-input not-targetable"
      v-model="comment"
      placeholder="Comment here..."
    ></textarea>
    <div class="button-container">
      <button
        class="modal-control-button"
        @click="toggleCommentModal()"
      >Cancel</button>
      <button
        class="modal-control-button"
        @click="addComment()"
      >Save</button>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, toRaw } from 'vue'
import useMenuController from '@/composables/menu/useMenuController'
import useConfig from '@/composables/store/useConfig'
import useSessionResults from '@/composables/store/useSessionResults'
import useDB from '@/composables/useDB'

export default defineComponent({
  name: 'TheCommentModal',

  setup() {
    const { toggleCommentModal } = useMenuController()
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
        toggleCommentModal()
      })
    }

    return {
      toggleCommentModal,
      comment,
      addComment
    }
  }
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixins';

.comment-input { @include rect(100%, 4em); }

</style>