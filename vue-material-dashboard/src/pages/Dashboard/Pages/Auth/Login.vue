<template>
  <div class="md-layout text-center login-fix-page">
    <div class="md-layout-item md-size-100">
      <div class="text-center">
        <h3>Log in to Mental Health Test App </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="text-center" style="margin-bottom: 32px;">
        <h5><strong>For test purposes here - you can log in using:</strong></h5>
        <div>Username: <b>admin@jsonapi.com</b> Password: <b>secret</b></div>
      </div>
    </div>

    <div
      class="md-layout-item md-size-33 md-medium-size-50 md-small-size-70 md-xsmall-size-100"
    >
      <form @submit.prevent="login">
        <login-card header-color="green">
          <h4 slot="title" class="title">Log in</h4>
          <p slot="description" class="description">Lorem ipsum</p>
          <md-field
            class="form-group md-invalid"
            slot="inputs"
            style="margin-bottom: 28px"
          >
            <md-icon>email</md-icon>
            <label>Email...</label>
            <md-input v-model="email" type="email" />
            <validation-error :errors="apiValidationErrors.email" />
          </md-field>
          <md-field class="form-group md-invalid" slot="inputs">
            <md-icon>lock_outline</md-icon>
            <label>Password...</label>
            <md-input v-model="password" type="password" />
          </md-field>
          <md-button
            slot="footer"
            type="submit"
            class="md-simple md-success md-lg"
          >
            Lets Go
          </md-button>
        </login-card>
      </form>
    </div>
  </div>
</template>

<script>
  import {LoginCard, ValidationError} from "@/components";
  import formMixin from "@/mixins/form-mixin";

  export default {
    components: {
      LoginCard, ValidationError
    },

    mixins: [formMixin],

    data: () => ({
      email: "admin@jsonapi.com",
      password: "secret",
    }),

    methods: {
      async login() {
        const user = {
          data: {
            type: "token",
            attributes: {
              email: this.email,
              password: this.password
            }
          }
        }

        const requestOptions = {
          headers: {
            'Accept': 'application/vnd.api+json',
            'Content-Type': 'application/vnd.api+json',
          }
        }

      try {
        await this.$store.dispatch("login", { user, requestOptions });
      } catch (e) {
        await this.$store.dispatch("alerts/error", "Invalid credentials!");
        this.setApiValidation(e.response.data.errors);
      }
    }
  }
};
</script>
<style scoped>
.login-fix-page {
  padding-bottom: 7em;
  padding-top: 4em;
}
</style>

