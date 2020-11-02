<template>
  <div class="comment-modal modal-content">

    <p class="modal-title">Comment</p>
    <textarea
      class="comment-input"
      v-model="comment"
      placeholder="Comment here..."
    ></textarea>
    <div class="button-container">
      <button
        class="modal-button"
        @click="toggleCommentModal"
      >Cancel</button>
      <button
        class="modal-button"
        @click="addComment"
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

.modal-content {
  @include position(fixed, 50%, $l: 50%);
  transform: translate(-50%, -50%);
  @include shadow();
  min-width: 300px;
  padding: 1em;
  border-radius: 0.75em;
  background: var(--c-menu);
  color: var(--c-text-secondary);
}

.modal-title {
  @include text(1.25em, $a: center, $w: 500);
  margin-bottom: 1rem;
}

.button-container {
  @include flex(flex, space-between);
  margin-top: 1rem;
}

.modal-button {
  font-weight: bold;
  @include hover() { color: var(--c-menu-icon-active); }
}

.comment-input { @include rect(100%, 4em); }

</style>