<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <interactive-graph-card/>
    </div>
    <div class="md-layout-item md-size-100">
      <interactive-table-card/>
    </div>
    <div class="md-layout-item md-size-100">
      <weekly-suggestion-card/>
    </div>
  </div>
</template>

<script>
import InteractiveGraphCard from "@/pages/Dashboard/Components/Data/InteractiveGraphCard.vue";
import InteractiveTableCard from "@/pages/Dashboard/Components/Data/InteractiveTableCard.vue";
import WeeklySuggestionsCard from "@/pages/Dashboard/Components/Data/WeeklySuggestionsCard.vue";

export default {
  name: "view-data",

  components: {
    "interactive-graph-card": InteractiveGraphCard,
    "interactive-table-card": InteractiveTableCard,
    "weekly-suggestion-card": WeeklySuggestionsCard
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