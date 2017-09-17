<template>
  <li v-if='story'>
    <span>[{{ story.score }}]</span>
    <a :href='story.url' target='_blank'>{{ story.title }}</a>
    <em>{{ story.by }}</em>
    <router-link :to='"/discuss/" + story.id'>{{ story.descendants }} comments</router-link>
  </li>
  <li v-else>
    Loading...
  </li>
</template>

<script>
export default {
  name: 'story',
  props: ['reference'],

  data() {
    return {
      story: null,
    }
  },

  created() {
    this.reference.on('value', (snapshot) => {
      this.story = snapshot.val()
    })
  },
}
</script>

<style scoped>
</style>
