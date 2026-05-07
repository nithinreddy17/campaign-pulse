import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { campaigns as mockData } from '../data/campaigns'

export const useCampaignStore = defineStore('campaign', () => {
  const campaigns = ref([...mockData])
  const nextId = ref(Math.max(0, ...mockData.map((campaign) => campaign.id)) + 1)
  const searchQuery = ref('')
  const statusFilter = ref('All')
  const typeFilter = ref('All')

  const filteredCampaigns = computed(() => {
    return campaigns.value.filter((campaign) => {
      const matchSearch = campaign.name
        .toLowerCase()
        .includes(searchQuery.value.toLowerCase())
      const matchStatus = statusFilter.value === 'All' || campaign.status === statusFilter.value
      const matchType = typeFilter.value === 'All' || campaign.type === typeFilter.value
      return matchSearch && matchStatus && matchType
    })
  })

  const stats = computed(() => ({
    total: campaigns.value.length,
    active: campaigns.value.filter((campaign) => campaign.status === 'Active').length,
    totalReach: campaigns.value.reduce((sum, campaign) => sum + campaign.reach, 0),
    totalConversions: campaigns.value.reduce((sum, campaign) => sum + campaign.conversions, 0),
    totalBudget: campaigns.value.reduce((sum, campaign) => sum + campaign.budget, 0),
    totalSpent: campaigns.value.reduce((sum, campaign) => sum + campaign.spent, 0),
  }))

  const addCampaign = (campaign) => {
    campaigns.value.unshift({
      ...campaign,
      id: nextId.value,
      spent: 0,
      reach: 0,
      conversions: 0,
      conversionRate: 0,
    })
    nextId.value += 1
  }

  const deleteCampaign = (id) => {
    campaigns.value = campaigns.value.filter((campaign) => campaign.id !== id)
  }

  const updateStatus = (id, newStatus) => {
    const campaign = campaigns.value.find((entry) => entry.id === id)
    if (campaign) {
      campaign.status = newStatus
    }
  }

  return {
    campaigns,
    searchQuery,
    statusFilter,
    typeFilter,
    filteredCampaigns,
    stats,
    addCampaign,
    deleteCampaign,
    updateStatus,
  }
})
