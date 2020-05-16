import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete';
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import vuetify from './plugins/vuetify';

import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)


Vue.use(VuetifyGoogleAutocomplete, {
  apiKey: 'AIzaSyC0zBHxbHr7jvPTchPEsNhq0QEcVKS6F6c', // Can also be an object. E.g, for Google Maps Premium API, pass `{ client: <YOUR-CLIENT-ID> }`

});

new Vue({
  vuetify,
  icons: {
    iconfont: 'md', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
  render: h => h(App)
}).$mount('#app')
