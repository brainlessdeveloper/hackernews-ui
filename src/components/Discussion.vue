<template>
  <div v-if='link.title' class='discussion'>
    <a :href='link.url' target='_blank'><h1>{{ link.title }}</h1></a>
    <div v-html='link.text'></div>
    <a :href='this.$HN_PORTAL_BASE + "item?id=" + id' target='_blank'>Add a comment</a>
    <ul>
      <comment
        v-for='comment in comments'
        :key='comment.objectID'
        :comment='comment'
      />
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

import Comment from './Comment'

const fetchLink = (base, id) => `${base}items/${id}`
const commentsFor = (base, id) => `${base}search_by_date?tags=comment,story_${id}`

const commentTree = (comments, story) => {
  const replies = parent => ({
    ...parent,
    replies: comments.filter(com => com.parent_id === parseInt(parent.objectID, 10)).map(replies),
  })
  return comments
    .filter(com => com.parent_id === story)
    .map(replies)
}

export default {
  props: ['id'],
  data: () => ({
    link: {},
    errors: [],
    comments: [],
  }),
  components: {
    comment: Comment,
  },

  async created() {
    try {
      const linkResponse = await axios.get(fetchLink(this.$SHN_API_BASE, this.id))
      const commentsResponse = await axios.get(
        commentsFor(this.$SHN_API_BASE, this.id),
        { params: { hitsPerPage: 1000 } }
      )
      this.link = linkResponse.data
      this.comments = commentTree(commentsResponse.data.hits, parseInt(this.id, 10))
    } catch (e) {
      this.errors.push(e)
    }
  },
}
</script>

<style scoped>
</style>
