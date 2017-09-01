<template>
  <div class='discussion'>
    <a :href='link.url' target='_blank'><h1>{{ link.title }}</h1></a>
    <div v-html='link.text'></div>
  </div>
</template>

<script>
import axios from 'axios'

const fetchLink = id => `http://hn.algolia.com/api/v1/items/${id}`

export default {
  props: ['id'],
  data: () => ({
    link: {},
    errors: [],
  }),

  async created() {
    try {
      const response = await axios.get(fetchLink(this.id))
      this.link = response.data
    } catch (e) {
      this.errors.push(e)
    }
  },
}
</script>

<style scoped>
</style>
