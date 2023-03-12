<template>
  <div class="md-layout">
    <label class="md-layout-item md-size-15 md-form-label">
      {{ title }}
    </label>
    <div class="md-layout-item">
      <md-field class="md-invalid">
        <md-radio v-model="model" :value="1"><md-icon>sentiment_very_dissatisfied</md-icon></md-radio>
        <md-radio v-model="model" :value="2"><md-icon>sentiment_dissatisfied</md-icon></md-radio>
        <md-radio v-model="model" :value="3"><md-icon>sentiment_neutral</md-icon></md-radio>
        <md-radio v-model="model" :value="4"><md-icon>sentiment_satisfied_alt</md-icon></md-radio>
        <md-radio v-model="model" :value="5"><md-icon>sentiment_very_satisfied</md-icon></md-radio>
      </md-field>
    </div>
  </div>
</template>

<script>
export default {
  name: "RatingRadio",

  props: {
    title: String,
    model: Object
  },
}
</script>

<style scoped>

</style>