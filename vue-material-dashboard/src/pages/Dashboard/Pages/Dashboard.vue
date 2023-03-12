<template>
  <div class="md-layout">

    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
      <stats-card header-color="blue">
        <template slot="header">
          <div class="card-icon">
            <md-icon>done</md-icon>
          </div>
          <p class="category">Tasks completed today</p>
          <h3 class="title">
            3/5
          </h3>
        </template>
        <template slot="footer">
          <div class="stats">
            <md-icon>update</md-icon>
            Just Updated
          </div>
        </template>
      </stats-card>
    </div>

    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
      <stats-card header-color="rose">
        <template slot="header">
          <div class="card-icon">
            <md-icon>local_fire_department</md-icon>
          </div>
          <p class="category">Daily streak</p>
          <h3 class="title">
            6 Days
          </h3>
        </template>
        <template slot="footer">
          <div class="stats">
            <md-icon>update</md-icon>
            28 minutes ago
          </div>
        </template>
      </stats-card>
    </div>

    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
      <stats-card header-color="green">
        <template slot="header">
          <div class="card-icon">
            <md-icon>mood</md-icon>
          </div>
          <p class="category">Mood Rating Today</p>
          <h3 class="title">
            38
          </h3>
        </template>
        <template slot="footer">
          <div class="stats">
            <md-icon>update</md-icon>
            4 minutes ago
          </div>
        </template>
      </stats-card>
    </div>

    <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
      <stats-card header-color="warning">
        <template slot="header">
          <div class="card-icon">
            <md-icon>watch</md-icon>
          </div>
          <p class="category">Smart Device Sync Status</p>
          <h3 class="title">
            Sync Unsuccessful
          </h3>
        </template>
        <template slot="footer">
          <div class="stats">
            <md-icon class="text-danger">warning</md-icon>
            <a href="#pablo">Re-sync here</a>
          </div>
        </template>
      </stats-card>
    </div>
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
    >
      <chart-card
        :chart-data="emailsSubscriptionChart.data"
        :chart-options="emailsSubscriptionChart.options"
        :chart-responsive-options="emailsSubscriptionChart.responsiveOptions"
        chart-type="Bar"
        chart-inside-header
        background-color="rose"
      >
        <md-icon slot="fixed-button">build</md-icon>
        <md-button class="md-simple md-info md-just-icon" slot="first-button">
          <md-icon>refresh</md-icon>
          <md-tooltip md-direction="bottom">Refresh</md-tooltip>
        </md-button>
        <md-button class="md-simple md-just-icon" slot="second-button">
          <md-icon>edit</md-icon>
          <md-tooltip md-direction="bottom">Change Date</md-tooltip>
        </md-button>

        <template slot="content">
          <h4 class="title">Website Views</h4>
          <p class="category">
            Last Campaign Performance
          </p>
        </template>

        <template slot="footer">
          <div class="stats">
            <md-icon>access_time</md-icon>
            updated 10 days ago
          </div>
        </template>
      </chart-card>
    </div>
    <div
      class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
    >
      <chart-card
        :chart-data="dailySalesChart.data"
        :chart-options="dailySalesChart.options"
        chart-type="Line"
        chart-inside-header
        background-color="green"
      >
        <md-button class="md-simple md-info md-just-icon" slot="first-button">
          <md-icon>refresh</md-icon>
          <md-tooltip md-direction="bottom">Refresh</md-tooltip>
        </md-button>
        <md-button class="md-simple md-just-icon" slot="second-button">
          <md-icon>edit</md-icon>
          <md-tooltip md-direction="bottom">Change Date</md-tooltip>
        </md-button>

        <template slot="content">
          <h4 class="title">Daily Mood rating</h4>
          <p class="category">
            <span class="text-success"
              ><i class="fas fa-long-arrow-alt-up"></i>
              55%
            </span>
            Increase in average rating from last week.
          </p>
        </template>

        <template slot="footer">
          <div class="stats">
            <md-icon>access_time</md-icon>
            updated 4 minutes ago
          </div>
        </template>
      </chart-card>
    </div>

    <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
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
    </div>

  </div>
</template>

<script>

import {
  StatsCard,
  ChartCard,
  NavTabsCard
} from "@/components";

export default {
  components: {
    StatsCard,
    ChartCard,
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
      ],
      dailySalesChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      emailsSubscriptionChart: {
        data: {
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec"
          ],
          series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 1000,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  },

  methods: {
    onSelect: function(items) {
      this.selected = items;
    }
  }
};
</script>
