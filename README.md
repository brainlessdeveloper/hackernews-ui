# hackernews-ui

A [Vue.js](https://vuejs.org/) interface for Hacker News which aims to make it easier to read and write comments

This is a pet project I'm using to learn how to use [Vue.js](https://vuejs.org/). I don't like the UI for comments in [Hacker News](https://news.ycombinator.com/) so my plan is to build a new one with (better) foldable comments, and eventually live notifications.

For indices and comment fetching I'm using [Search Hacker News](https://hn.algolia.com/api) and I'm planning to use [the official HackerNews API](https://github.com/HackerNews/API), which uses Firebase, for live notifications.

Feel free to contribute!

## Build setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit
```
