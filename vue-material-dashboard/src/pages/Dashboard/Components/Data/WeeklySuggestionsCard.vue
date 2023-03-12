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
          suggestion: "Lorem Ipsum"
        },
        {
          number: "2",
          suggestion: "Lorem Ipsum"
        },
        {
          number: "3",
          suggestion: "Lorem Ipsum"
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
