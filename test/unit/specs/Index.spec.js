import Vue from 'vue'

import Index from '@/components/Index'

describe('Index.vue', () => {
  it('has a unit test', () => {
    const Constructor = Vue.extend(Index)
    const vm = new Constructor().$mount()
    return expect(vm.$el.textContent).to.be.defined
  })
})
