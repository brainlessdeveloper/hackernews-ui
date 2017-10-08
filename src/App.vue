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

<style lang='scss'>
html {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 18px;
  letter-spacing: -.004em;
  line-height: 1.58;
  font-weight: 300;
  text-decoration: none;
}

a {
  text-decoration: none;
  color: black;
}

a:visited {
  color: lightgrey;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Source Sans Pro', sans-serif;
  letter-spacing: .01em;
  font-weight: 400;
  line-height: 1.32;
}

*, *:before, *:after {
  box-sizing: inherit;
  min-height: 0;
  min-width: 0;
}

.separator {
  padding: 0 2px;

  &::after {
    content: '·';
  }
}
</style>
