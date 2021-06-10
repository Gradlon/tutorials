// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import 'bootstrap-css-only/css/bootstrap.min.css'
import './css/app.scss'
import * as mdbvue from './mdbvue'


export default function (Vue, { router, head, isClient }) {
// mport { mdbContainer, mdbRow, mdbBtn } from 'mdbvue'
// ue.component('mdbContainer', mdbContainer)
for (const component in mdbvue) {
    Vue.component(component, mdbvue[component])
}
  // Set default layout as a global component
    Vue.component('Layout', DefaultLayout)
}
