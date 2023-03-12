<template>
    <div class="md-layout-item md-size-100">
      <div class="md-layout-item md-size-100">
        <mood-input-card :user="user"/>
      </div>
    </div>
</template>

<script>
  import MoodInputCard from "@/pages/Dashboard/Components/Input/MoodInputCard.vue";

  export default {
    name: "user-profile-example",

    components: {
      "mood-input-card": MoodInputCard
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