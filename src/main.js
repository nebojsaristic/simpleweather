import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/*
var mixin = {
  data: function () {
    return 
      units: "metric"
  }
}
*/

new Vue({
  render: h => h(App),
}).$mount('#app')
