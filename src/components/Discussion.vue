<template>
  <div class='discussion'>
    <a :href='link.url' target='_blank'><h1>{{ link.title }}</h1></a>
    <div v-html='link.text'></div>
    <h2>Comments</h2>
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

const fetchLink = id => `http://hn.algolia.com/api/v1/items/${id}`
const commentsFor = id => `http://hn.algolia.com/api/v1/search?tags=comment,story_${id}`

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
      const linkResponse = await axios.get(fetchLink(this.id))
      const commentsResponse = await axios.get(
        commentsFor(this.id),
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
