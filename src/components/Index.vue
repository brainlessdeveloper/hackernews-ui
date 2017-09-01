<template>
  <div class='index'>
    <h1>Hackernews UI</h1>
    <ul>
      <li v-for='link in links'>
        <span>[{{ link.points }}]</span>
        <a :href='link.url'>{{ link.title }}</a>
        <em>{{ link.author }}</em>
        <router-link :to='"/discuss/" + link.objectID'>{{ link.num_comments }} comments</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

const TOP_LINKS = 'http://hn.algolia.com/api/v1/search_by_date?tags=story'

export default {
  data: () => ({
    links: [],
    errors: [],
  }),

  async created() {
    try {
      const response = await axios.get(TOP_LINKS)
      this.links = response.data.hits
    } catch (e) {
      this.errors.push(e)
    }
  },
}
</script>

<style scoped>
</style>
