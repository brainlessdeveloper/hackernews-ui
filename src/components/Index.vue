<template>
  <div class='index'>
    <h1>Hackernews UI</h1>
    <a :href='this.$HN_PORTAL_BASE + "submit"' target='_blank'>
      Submit a new story
    </a>
    <ul>
      <li v-for='story in stories'>
        <span>[{{ story.points }}]</span>
        <a :href='story.url'>{{ story.title }}</a>
        <em>{{ story.author }}</em>
        <router-link :to='"/discuss/" + story.objectID'>{{ story.num_comments }} comments</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { connect } from 'revux'

import { storiesActions } from '../store/actions'

const mapState = state => ({ stories: state.stories.index })
const mapProps = { fetchStories: storiesActions.fetchIndex }

export default connect(mapState, mapProps)({
  created() {
    this.fetchStories()
  },
})
</script>

<style scoped>
</style>
