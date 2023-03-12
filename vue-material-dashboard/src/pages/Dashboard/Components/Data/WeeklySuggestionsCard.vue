<template>
      <md-card>
        <md-card-header class="md-card-header-text md-card-header-blue">
          <div class="card-text">
            <h4 class="title">Your Suggestions</h4>
            <p class="category">
              Based on the data you submitted
            </p>
          </div>
        </md-card-header>
        <md-card-content>
          <md-table v-model="suggestions" table-header-color="blue">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="Number">{{ item.number }}</md-table-cell>
              <md-table-cell md-label="Suggestion">{{ item.suggestion }}</md-table-cell>
            </md-table-row>
          </md-table>
        </md-card-content>
      </md-card>
</template>

<script>
export default {
  components: {
  },

  data() {
    return {
      suggestions: [
        {
          number: "1",
          suggestion: "You tend to have more energy when you get more than 7 hours sleep, try to get this whenever you can"
        },
        {
          number: "2",
          suggestion: "You tend to become more angry when you do more than 20,000 steps in a day, try to avoid this in future"
        },
        {
          number: "3",
          suggestion: "On days you had 1 hour or more social time you were more motivated, try to keep this up"
        },
      ]
    };
  },

  methods: {
    onSelect: function(items) {
      this.selected = items;
    }
  }
};
</script>
