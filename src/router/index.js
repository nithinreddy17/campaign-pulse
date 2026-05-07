import { createRouter, createWebHistory } from 'vue-router'
import DashboardView from '../views/DashboardView.vue'
import CampaignsView from '../views/CampaignsView.vue'
import CreateCampaignView from '../views/CreateCampaignView.vue'
import AnalyticsView from '../views/AnalyticsView.vue'

const routes = [
  { path: '/', component: DashboardView, meta: { title: 'Dashboard' } },
  { path: '/campaigns', component: CampaignsView, meta: { title: 'Campaigns' } },
  { path: '/create', component: CreateCampaignView, meta: { title: 'Create Campaign' } },
  { path: '/analytics', component: AnalyticsView, meta: { title: 'Analytics' } },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
