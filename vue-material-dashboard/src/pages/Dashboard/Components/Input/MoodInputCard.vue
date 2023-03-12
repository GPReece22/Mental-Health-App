<template>
  <form @submit.prevent="updateProfile">
    <md-card>
      <md-card-header class="md-card-header-icon">
        <div class="card-icon">
          <md-icon>add_reaction</md-icon>
        </div>
        <h4 class="title">
          How have you felt today?
        </h4>
      </md-card-header>

      <md-button @click = "showHelp = true"> <md-icon>help</md-icon></md-button>
      <div>
        <md-dialog :md-active.sync="showHelp">
          <md-dialog-title>Mood Rating</md-dialog-title>
          <p>1 = felt very bad today</p>
          <p>5 = felt very good today</p>
        </md-dialog>
      </div>

      <md-card-content>
        <div class="md-layout">
          <label class="md-layout-item md-size-15 md-form-label">
            Mood
          </label>
          <div class="md-layout-item">
            <md-field class="md-invalid">
              <md-radio v-model="ratings.mood" :value="1"><md-icon>sentiment_very_dissatisfied</md-icon></md-radio>
              <md-radio v-model="ratings.mood" :value="2"><md-icon>sentiment_dissatisfied</md-icon></md-radio>
              <md-radio v-model="ratings.mood" :value="3"><md-icon>sentiment_neutral</md-icon></md-radio>
              <md-radio v-model="ratings.mood" :value="4"><md-icon>sentiment_satisfied_alt</md-icon></md-radio>
              <md-radio v-model="ratings.mood" :value="5"><md-icon>sentiment_very_satisfied</md-icon></md-radio>
            </md-field>

          </div>
        </div>

        <div class="md-layout">
            <label class="md-layout-item md-size-15 md-form-label">
              Energy
            </label>
            <div class="md-layout-item">
              <md-field class="md-invalid">
                <md-radio v-model="ratings.energy" :value="1"><md-icon>sentiment_very_dissatisfied</md-icon></md-radio>
                <md-radio v-model="ratings.energy" :value="2"><md-icon>sentiment_dissatisfied</md-icon></md-radio>
                <md-radio v-model="ratings.energy" :value="3"><md-icon>sentiment_neutral</md-icon></md-radio>
                <md-radio v-model="ratings.energy" :value="4"><md-icon>sentiment_satisfied_alt</md-icon></md-radio>
                <md-radio v-model="ratings.energy" :value="5"><md-icon>sentiment_very_satisfied</md-icon></md-radio>
              </md-field>
            </div>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-15 md-form-label">
            Anger/Irritation
          </label>
          <div class="md-layout-item">
            <md-field class="md-invalid">
              <md-radio v-model="ratings.anger" :value="1"><md-icon>sentiment_very_dissatisfied</md-icon></md-radio>
              <md-radio v-model="ratings.anger" :value="2"><md-icon>sentiment_dissatisfied</md-icon></md-radio>
              <md-radio v-model="ratings.anger" :value="3"><md-icon>sentiment_neutral</md-icon></md-radio>
              <md-radio v-model="ratings.anger" :value="4"><md-icon>sentiment_satisfied_alt</md-icon></md-radio>
              <md-radio v-model="ratings.anger" :value="5"><md-icon>sentiment_very_satisfied</md-icon></md-radio>
            </md-field>
          </div>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-15 md-form-label">
            Motivation
          </label>
          <div class="md-layout-item">
            <md-field class="md-invalid">
              <md-radio v-model="ratings.motivation" :value="1"><md-icon>sentiment_very_dissatisfied</md-icon></md-radio>
              <md-radio v-model="ratings.motivation" :value="2"><md-icon>sentiment_dissatisfied</md-icon></md-radio>
              <md-radio v-model="ratings.motivation" :value="3"><md-icon>sentiment_neutral</md-icon></md-radio>
              <md-radio v-model="ratings.motivation" :value="4"><md-icon>sentiment_satisfied_alt</md-icon></md-radio>
              <md-radio v-model="ratings.motivation" :value="5"><md-icon>sentiment_very_satisfied</md-icon></md-radio>
            </md-field>
          </div>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-15 md-form-label">
            Concentration
          </label>
          <div class="md-layout-item">
            <md-field class="md-invalid">
              <md-radio v-model="ratings.concentration" :value="1"><md-icon>sentiment_very_dissatisfied</md-icon></md-radio>
              <md-radio v-model="ratings.concentration" :value="2"><md-icon>sentiment_dissatisfied</md-icon></md-radio>
              <md-radio v-model="ratings.concentration" :value="3"><md-icon>sentiment_neutral</md-icon></md-radio>
              <md-radio v-model="ratings.concentration" :value="4"><md-icon>sentiment_satisfied_alt</md-icon></md-radio>
              <md-radio v-model="ratings.concentration" :value="5"><md-icon>sentiment_very_satisfied</md-icon></md-radio>
            </md-field>
          </div>
        </div>

          <small>Total Mood Score: {{ ratings.mood + ratings.energy + ratings.anger + ratings.motivation + ratings.concentration  }}</small>

      </md-card-content>

      <md-card-actions>
        <md-button type="submit">
          Add rating
        </md-button>
      </md-card-actions>
    </md-card>
  </form>
</template>
<script>
import formMixin from "@/mixins/form-mixin";

export default {
  name: "mood-input-card",

  props: {
    user: Object,
  },

  components: {  },

  mixins: [formMixin],

  data() {
    return {
      default_img: process.env.VUE_APP_BASE_URL + "/img/placeholder.jpg",
      ratings: {
        mood: 0,
        energy: 0,
        anger: 0,
        motivation: 0,
        concentration :0
      },
      showHelp: false
    };
  },

  methods: {
    async updateProfile() {
      if (["1", "2", "3"].includes(this.user.id)) {
        await this.$store.dispatch(
          "alerts/error",
          "You are not allowed not change data of default users."
        );
        return;
      }

      try {
        await this.$store.dispatch("profile/update", this.user);
        await this.$store.dispatch(
          "alerts/success",
          "Profile updated successfully."
        );
        await this.$store.getters["profile/me"];
      } catch (e) {
        await this.$store.dispatch(
          "alerts/error",
          "Oops, something went wrong!"
        );
        this.setApiValidation(e.response.data.errors);
      }
    },
  },
};
</script>

<style></style>
