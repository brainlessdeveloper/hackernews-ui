<template>
  <div class='index'>
    <h1>Hackernews UI</h1>
    <a :href='this.$HN_PORTAL_BASE + "submit"' target='_blank'>
      Submit a new story
    </a>
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

const topLinks = base => `${base}search?tags=front_page`

export default {
  data: () => ({
    links: [],
    errors: [],
  }),

  async created() {
    try {
      const response = await axios.get(topLinks(this.$SHN_API_BASE))
      this.links = response.data.hits
    } catch (e) {
      this.errors.push(e)
    }
  },
}
</script>

<style scoped>
</style>
