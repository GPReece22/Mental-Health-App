<template>
  <div class="md-layout">
    <div class="md-layout-item md-size-100">
      <interactive-graph-card/>
    </div>
    <div class="md-layout-item md-size-100">
      <rolling-interactive-graph-card/>
    </div>
    <div class="md-layout-item md-size-100">
      <interactive-table-card/>
    </div>
  </div>
</template>

<script>
import RollingInteractiveGraphCard from "@/pages/Dashboard/Components/Data/RollingInteractiveGraphCard.vue";
import InteractiveTableCard from "@/pages/Dashboard/Components/Data/InteractiveTableCard.vue";
import InteractiveGraphCard from "@/pages/Dashboard/Components/Data/InteractiveGraphCard.vue";

export default {
  name: "view-data",

  components: {
    "interactive-graph-card": InteractiveGraphCard,
    "rolling-interactive-graph-card": RollingInteractiveGraphCard,
    "interactive-table-card": InteractiveTableCard
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