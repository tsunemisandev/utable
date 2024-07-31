import Vue from 'vue'
import App from './App.vue'
import UTable from 'umy-ui/packages/u-table'
import UTableColumn from 'umy-ui/packages/u-table-column'

import './assets/main.css'

Vue.component('UTable', UTable)

Vue.component('UTableColumn', UTableColumn)
new Vue({
  render: (h) => h(App),
})
.$mount('#app')
