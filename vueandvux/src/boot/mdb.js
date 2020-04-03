import * as mdbvue from 'mdbvue'
import Vue from 'vue'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}
