<template>
  <div class='discussion'>
    <a :href='link.url' target='_blank'><h1>{{ link.title }}</h1></a>
    <div v-html='link.text'></div>
    <h2>Comments</h2>
    <ul>
      <li v-for='comment in comments'>
        <div v-html='comment.comment_text'></div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

const fetchLink = id => `http://hn.algolia.com/api/v1/items/${id}`
const commentsFor = id => `http://hn.algolia.com/api/v1/search?tags=comment,story_${id}`

export default {
  props: ['id'],
  data: () => ({
    link: {},
    errors: [],
    comments: [],
  }),

  async created() {
    try {
      const linkResponse = await axios.get(fetchLink(this.id))
      const commentsResponse = await axios.get(
        commentsFor(this.id),
        { params: { hitsPerPage: 1000 } }
      )
      this.link = linkResponse.data
      this.comments = commentsResponse.data.hits
    } catch (e) {
      this.errors.push(e)
    }
  },
}
</script>

<style scoped>
</style>
