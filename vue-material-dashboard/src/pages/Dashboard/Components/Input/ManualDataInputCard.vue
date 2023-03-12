<template>
  <form @submit.prevent="submitData">
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
            <md-field>
              <label>Initial Value</label>
              <md-input v-model="initial"></md-input>
            </md-field>
          </div>
        </div>
      </md-card-content>

      <md-card-actions>
        <md-button type="submit">
          Submit Data
        </md-button>
      </md-card-actions>
    </md-card>
  </form>
</template>
<script>
import formMixin from "@/mixins/form-mixin";

export default {
  name: "mood-input-card",

  components: {  },

  mixins: [formMixin],

  data() {
    return {
      ratings: {
        mood: 0,
        energy: 0,
        anger: 0,
        motivation: 0,
        concentration: 0
      },
      showHelp: false
    };
  },

  methods: {
    async submitData() {
      try {
        await this.$store.dispatch(
            "alerts/success",
            "Data inputted successfully"
        );
      } catch (e) {
        await this.$store.dispatch(
            "alerts/error",
            "Oops, something went wrong!"
        );
      }
    }
  }
};
</script>

<style></style>
