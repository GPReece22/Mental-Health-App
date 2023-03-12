<template>
  <div class="md-layout">
    <div class="md-layout-item">
      <form @submit.prevent="register">
        <signup-card>
          <h2 class="title text-center" slot="title">Register</h2>
          <div
            class="md-layout-item md-size-50 md-medium-size-50 md-small-size-100 ml-auto"
            slot="content-left"
          >
            <div
              class="info info-horizontal"
              v-for="item in contentLeft"
              :key="item.title"
            >
              <div :class="`icon ${item.colorIcon}`">
                <md-icon>{{ item.icon }}</md-icon>
              </div>
              <div class="description">
                <h4 class="info-title">{{ item.title }}</h4>
                <p class="description">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
          <div
            class="md-layout-item md-size-50 md-medium-size-50 md-small-size-100 mr-auto"
            slot="content-right"
          >
            <md-field
              class="md-form-group md-invalid"
              style="margin-bottom: 2rem"
            >
              <md-icon>face</md-icon>
              <label>Name</label>
              <md-input v-model="name" />
              <validation-error :errors="apiValidationErrors.name" />
            </md-field>

            <md-field
              class="md-form-group md-invalid"
              style="margin-bottom: 2rem"
            >
              <md-icon>email</md-icon>
              <label>Email</label>
              <md-input v-model="email" />
              <validation-error :errors="apiValidationErrors.email" />
            </md-field>

            <md-field
              class="md-form-group md-invalid"
              style="margin-bottom: 2rem"
            >
              <md-icon>lock_outline</md-icon>
              <label>Password</label>
              <md-input v-model="password" type="password" />
              <validation-error :errors="apiValidationErrors.password" />
            </md-field>

            <md-field class="md-form-group md-invalid">
              <md-icon>lock_outline</md-icon>
              <label>Confirm Password</label>
              <md-input v-model="password_confirmation" type="password" />
              <validation-error
                :errors="apiValidationErrors.password_confirmation"
              />
            </md-field>

            <md-checkbox v-model="boolean"
              >I agree to the <a>terms and conditions</a>.</md-checkbox
            >

            <div class="button-container">
              <md-button
                class="md-success md-round mt-4"
                type="submit"
                slot="footer"
              >
                Get Started
              </md-button>
            </div>
          </div>
        </signup-card>
      </form>
    </div>
  </div>
</template>
<script>
import { SignupCard, ValidationError } from "@/components";
import formMixin from "@/mixins/form-mixin";

export default {
  components: {
    SignupCard,
    ValidationError,
  },
  mixins: [formMixin],
  data() {
    return {
      name: null,
      boolean: false,
      email: null,
      role: 1,
      password: null,
      password_confirmation: null,
      contentLeft: [
        {
          colorIcon: "icon-success",
          icon: "timeline",
          title: "Track your mental health",
          description:
            "Track your daily activities and how they are affecting your mental health",
        },

        {
          colorIcon: "icon-danger",
          icon: "code",
          title: "Lorem Ipsum",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },

        {
          colorIcon: "icon-info",
          icon: "group",
          title: "Lorem Ipsum",
          description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    };
  },

  methods: {
    async register() {
      if (!this.boolean) {
        await this.$store.dispatch(
          "alerts/error",
          "You need to agree with our terms and conditions."
        );
        return;
      }

      const user = {
        data: {
          type: "token",
          attributes: {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
          },
        },
      };

      const requestOptions = {
        headers: {
          Accept: "application/vnd.api+json",
          "Content-Type": "application/vnd.api+json",
        },
      };

      try {
        await this.$store.dispatch("register", { user, requestOptions });
        await this.$store.dispatch(
          "alerts/success",
          "Successfully registered."
        );
      } catch (e) {
        await this.$store.dispatch(
          "alerts/error",
          "Oops, something went wrong"
        );
        this.setApiValidation(e.response.data.errors);
      }
    },
  },
};
</script>
