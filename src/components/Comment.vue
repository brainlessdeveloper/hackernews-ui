<template>
  <li class='comment'>
    <em>{{ comment.author }}</em>
    <span>{{ comment.created_at | moment('from', 'now') }}</span>
    <div v-html='comment.comment_text' />
    <a :href='this.$HN_PORTAL_BASE + "reply?id=" + comment.objectID' target='_blank'>Reply</a>
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
import Vue from 'vue'
import moment from 'vue-moment'

import Comment from './Comment'

Vue.use(moment)

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
