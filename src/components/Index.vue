<template>
  <div class='index'>
    <a :href='this.$HN_PORTAL_BASE + "submit"' target='_blank'>
      Submit a new story
    </a>
    <ul>
      <story
        v-for='reference in stories'
        :reference='reference'
        key='reference.key'
      />
    </ul>
    <button v-on:click='loadMore'>Load more</button>
  </div>
</template>

<script>
import { connect } from 'revux'

import { storiesActions } from '../store/actions'

import Story from './Story'

const LOAD_MORE_STEP = 30

const mapState = { stories: state => state.stories.index }
const mapProps = { fetchStories: storiesActions.fetchIndex }

export default connect(mapState, mapProps)({
  name: 'index',
  components: {
    story: Story,
  },
  mounted() {
    this.fetchStories()
  },
  methods: {
    loadMore() {
      this.fetchStories(this.stories.length + LOAD_MORE_STEP)
    },
  },
})
</script>

<style scoped>
</style>
