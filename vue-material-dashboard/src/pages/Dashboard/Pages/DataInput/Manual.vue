<template>
  <div v-if="user" class="md-layout md-gutter">
    <div class="md-layout-item md-size-100">
        <manual-input-card/>
      </div>
    </div>
</template>

<script>
  import ManualDataInputCard from "@/pages/Dashboard/Components/Input/ManualDataInputCard.vue";

  export default {
    name: "user-profile-example",

    components: {
      "manual-input-card": ManualDataInputCard,
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