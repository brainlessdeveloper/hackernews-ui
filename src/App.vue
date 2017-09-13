<template>
  <div id="app">
    <Provider :store='store'>
      <router-view></router-view>
    </Provider>
  </div>
</template>

<script>
import 'normalize.css'

import store from './store'

export default {
  data() {
    return {
      store,
    }
  },
  name: 'app',
}
</script>

<style>
html {
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: inherit;
  min-height: 0;
  min-width: 0;
}
</style>
