<template>
  <div class='index'>
    <h1>Hackernews UI</h1>
    <a :href='this.$HN_PORTAL_BASE + "submit"' target='_blank'>
      Submit a new story
    </a>
    <ul>
      <story
        v-for='story in stories'
        :story='story'
        key='story.id'
      />
    </ul>
  </div>
</template>

<script>
import { connect } from 'revux'

import { storiesActions } from '../store/actions'

import Story from './Story'

const mapState = { stories: state => state.stories.index }
const mapProps = { fetchStories: storiesActions.fetchIndex }

export default connect(mapState, mapProps)({
  name: 'index',
  components: {
    story: Story,
  },
})
</script>

<style scoped>
</style>
