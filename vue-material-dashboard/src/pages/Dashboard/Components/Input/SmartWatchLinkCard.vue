<template>
  <form @submit.prevent="submitData">
    <md-card>
      <md-card-header class="md-card-header-icon">
        <div class="card-icon">
          <md-icon>watch</md-icon>
        </div>
        <h4 class="title">
          Link to your smartwatch here
        </h4>
        <div class="md-label-on-right">
          <md-button @click = "showHelp = true"> <md-icon>help</md-icon></md-button>
          <div>
            <md-dialog :md-active.sync="showHelp">
              <md-dialog-title>Input help</md-dialog-title>
              <p>Lorem Ipsum</p>
            </md-dialog>
          </div>
        </div>
      </md-card-header>

      <md-card-content>
        <h3>Coming soon please use <a href = "/data-input/manual">manual data input</a> for now</h3>
      </md-card-content>

      <md-card-actions>
        <md-button type="submit">
          Submit
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
      steps: 0,
      calories: 0,
      sleepTime: 0,
      socialTime: 0,
      exerciseTime: 0,
      showHelp: false
    };
  },

  methods: {
    async submitData() {
      try {
        await this.$store.dispatch(
            "alerts/success",
            "Link successful"
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
