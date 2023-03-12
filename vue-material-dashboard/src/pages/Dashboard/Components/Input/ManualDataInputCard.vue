<template>
  <form @submit.prevent="submitData">
    <md-card>
      <md-card-header class="md-card-header-icon">
        <div class="card-icon">
          <md-icon>edit_note</md-icon>
        </div>
        <h4 class="title">
          Please Input your data for today (GET DATE)
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
        <div class="md-layout">
          <label class="md-layout-item md-size-15 md-form-label">
            Total Steps
          </label>
          <div class="md-layout-item">
            <md-field>
              <md-input v-model="steps" type="number" min="0">
              </md-input>
              <span class="md-suffix">Steps</span>
            </md-field>
          </div>
        </div>
        <div class="md-layout">
          <label class="md-layout-item md-size-15 md-form-label">
            Additional Exercise Time
          </label>
          <div class="md-layout-item">
            <md-field>
              <md-input v-model="exerciseTime" type="time" min="0">
              </md-input>
              <span class="md-suffix">HH:mm</span>
            </md-field>
          </div>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-15 md-form-label">
            Total Calories
          </label>
          <div class="md-layout-item">
            <md-field>
              <md-input v-model="calories" type="number" min="0">
              </md-input>
              <span class="md-suffix">kcal</span>
            </md-field>
          </div>
        </div>

        <div class="md-layout">
        <label class="md-layout-item md-size-15 md-form-label">
          Sleep Time
        </label>
        <div class="md-layout-item">
          <md-field>
            <md-input v-model="sleepTime" type="time" min="0">
            </md-input>
            <span class="md-suffix">HH:mm</span>
          </md-field>
        </div>
        </div>

        <div class="md-layout">
          <label class="md-layout-item md-size-15 md-form-label">
            Social Time
          </label>
          <div class="md-layout-item">
            <md-field>
              <md-input v-model="socialTime" type="time" min="0">
              </md-input>
              <span class="md-suffix">HH:mm</span>
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
