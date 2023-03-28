<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <weekly-suggestions-card/>
    </div>
    <div class="md-layout-item md-size-100">
      <heatmap-card/>
    </div>
    <div class="md-layout-item md-size-100">
      <short-interactive-graph-card/>
    </div>
  </div>
</template>

<script>
import ShortInteractiveGraphCard from "@/pages/Dashboard/Components/Data/ShortInteractiveGraphCard.vue";
import HeatMapCard from "@/pages/Dashboard/Components/Data/HeatMapCard.vue";
import WeeklySuggestionsCard from "@/pages/Dashboard/Components/Data/WeeklySuggestionsCard.vue";

export default {
  name: "view-data",

  components: {
    "short-interactive-graph-card": ShortInteractiveGraphCard,
    "heatmap-card": HeatMapCard,
    "weekly-suggestions-card": WeeklySuggestionsCard
  },

  data: () => ({
    user: null
  }),

  created() {
    this.getProfile();
  },

  methods: {
    async getProfile() {
      await this.$store.dispatch("profile/me")
      this.user = await this.$store.getters["profile/me"]
    }
  }
}
</script>