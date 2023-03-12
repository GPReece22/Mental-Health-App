<template>
    <div class="md-layout-item md-size-100">
      <smart-watch-link-card/>
    </div>
</template>

<script>
  import SmartWatchLinkCard from "@/pages/Dashboard/Components/Input/SmartWatchLinkCard.vue";

  export default {
    name: "user-profile-example",

    components: {
      "smart-watch-link-card": SmartWatchLinkCard,
    },

    data: () => ({
      user: null
    }),

    created() {
    },

    methods: {
    }
  }
</script>