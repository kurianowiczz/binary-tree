import Vue from 'vue'
import App from './App.vue'
import Tree from './components/Tree.vue'

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#tree',
  render: h => h(Tree)
})
