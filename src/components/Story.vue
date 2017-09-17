<template>
  <li>
    <span>[{{ story.score }}]</span>
    <a :href='story.url' target='_blank'>{{ story.title }}</a>
    <em>{{ story.by }}</em>
    <router-link :to='"/discuss/" + story.id'>{{ story.descendants }} comments</router-link>
  </li>
</template>

<script>
export default {
  name: 'story',
  props: ['story'],
}
</script>

<style scoped>
</style>
