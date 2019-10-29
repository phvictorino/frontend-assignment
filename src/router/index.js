import Vue from 'vue';
import VueRouter from 'vue-router';

import CompanyData from 'Pages/CompanyData.vue'
import CompanyTable from 'Pages/CompanyTable.vue'
import CompanyPage from 'Pages/CompanyPage.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:
    [
      {
        path: '/',
        redirect: { name: 'companyData' }
      },
      {
        path: '/data',
        name: 'companyData',
        component: CompanyData
      },
      {
        path: '/table',
        name: 'companyTable',
        component: CompanyTable
      },
      {
        path: '/page',
        name: 'companyPage',
        component: CompanyPage
      }
    ]
})