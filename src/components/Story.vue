<template>
  <li v-if='story'>
    <div class='story'>
      <span class='story__score'>[{{ story.score }}]</span>
      <a class='story__title' :href='story.url' target='_blank'>{{ story.title }}</a>
      <router-link :to='"/discuss/" + story.id' class='story__comments'>· {{ story.descendants || 0 }} comments</router-link>
    </div>
    <div class='info'>
      <em class='story__author'>{{ story.by }}</em>
      <span class='separator' />
      <span class='info__time'>{{ story.time * 1000 | moment('from', 'now') }}</span>
      <span class='separator' />
      <span class='info__frequency'>{{ pointsPerHour() }} points per hour</span>
    </div>
  </li>
  <li v-else>
    Loading...
  </li>
</template>

<script>
import Vue from 'vue'
import moment from 'vue-moment'

Vue.use(moment)

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

  methods: {
    pointsPerHour() {
      return parseFloat(
        this.story.score / (((new Date()).getTime() - (this.story.time * 1000)) / 3600000)
      ).toFixed(2)
    },
  },
}
</script>

<style lang='scss' scoped>
li {
  list-style: none;
}

.story {
  display: flex;
  align-items: baseline;

  &__title {
    font-weight: 400;
    font-size: 20px;
  }

  &__score {
    align-self: center;
    flex: 0 0 60px;
    text-align: right;
    padding-right: 6px;
    box-sizing: border-box;
    letter-spacing: .04em;
  }

  &__comments {
    box-sizing: border-box;
    padding-left: 6px;
  }
}

.info {
  color: grey;
  box-sizing: border-box;
  padding-left: 60px;
  padding-bottom: 6px;

  &__time {

  }

  &__author {

  }
}
</style>
