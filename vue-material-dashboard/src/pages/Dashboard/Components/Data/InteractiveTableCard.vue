<template>
      <md-card>
        <md-card-header class="md-card-header-text md-card-header-warning">
          <div class="card-text">
            <h4 class="title">Happiest days</h4>
            <p class="category">
              From the last 6 months
            </p>
          </div>
        </md-card-header>
        <md-card-content>
          <md-table v-model="users" table-header-color="orange">
            <md-table-row slot="md-table-row" slot-scope="{ item }">
              <md-table-cell md-label="Date">{{ item.date }}</md-table-cell>
              <md-table-cell md-label="Mood Rating">{{ item.moodRating }}</md-table-cell>
              <md-table-cell md-label="Sleep Time">{{ item.sleepTime }}</md-table-cell>
              <md-table-cell md-label="Total Steps">{{ item.totalSteps }}</md-table-cell>
              <md-table-cell md-label="Social Time">{{ item.socialTime }}</md-table-cell>
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
      users: [
        {
          date: "06/03/23",
          moodRating: "97",
          sleepTime: "7hr 56m",
          totalSteps: "26,385",
          socialTime: "1hr"
        },
        {
          date: "04/01/23",
          moodRating: "94",
          sleepTime: "8hr 12m",
          totalSteps: "9,304",
          socialTime: "2hr"
        },
        {
          date: "24/12/22",
          moodRating: "92",
          sleepTime: "10hr 36m",
          totalSteps: "235",
          socialTime: "4hr"
        },
        {
          date: "30/11/22",
          moodRating: "89",
          sleepTime: "5hr 56m",
          totalSteps: "13,385",
          socialTime: "0hr"
        },
        {
          date: "09/03/23",
          moodRating: "87",
          sleepTime: "8hr 08m",
          totalSteps: "4,327",
          socialTime: "3hr"
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
