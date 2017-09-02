<template>
  <li class='comment'>
    <div v-html='comment.comment_text'></div>
    <ul>
      <comment
        v-for='reply in comment.replies'
        :key='reply.objectID'
        :comment='reply'
      />
    </ul>
  </li>
</template>

<script>
import Comment from './Comment'

export default {
  name: 'comment',
  props: ['comment'],
  data: () => ({
    replies: [],
    errors: [],
  }),
  components: {
    comment: Comment,
  },
}
</script>

<style scoped>
</style>
