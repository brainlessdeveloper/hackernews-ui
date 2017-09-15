<template>
  <div class='discussion'>
    <div v-if='loading'>Loading...</div>
    <div v-else>
      <a :href='story.url' target='_blank'><h1>{{ story.title }}</h1></a>
      <div v-html='story.text'></div>
      <a :href='this.$HN_PORTAL_BASE + "item?id=" + id' target='_blank'>Add a comment</a>
      <ul>
        <comment
          v-for='comment in comments'
          :key='comment.objectID'
          :comment='comment'
        />
      </ul>
    </div>
  </div>
</template>

<script>
import { connect } from 'revux'

import { storiesActions, commentsActions } from '../store/actions'

import Comment from './Comment'

const mapState = {
  story: state => state.stories.single,
  comments: state => state.comments.trees[state.stories.single.id],
  loading: state => state.comments.loading.index || state.stories.loading.single,
}
const mapProps = {
  fetchComments: commentsActions.fetchIndex,
  fetchStory: storiesActions.fetchSingle,
}

export default connect(mapState, mapProps)({
  props: ['id'],
  components: {
    comment: Comment,
  },
  mounted() {
    this.fetchStory(this.id)
    this.fetchComments(this.id)
  },
})
</script>

<style scoped>
</style>
