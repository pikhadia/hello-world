
import Vue from 'vue'
import App from './App.vue'
import VueDropdown from 'vue-dynamic-dropdown'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false;
Vue.use(VueMaterial);
Vue.component('vue-dropdown', VueDropdown);


new Vue({
  
    render: h => h(App),
}).$mount('#app')

