<template>
  <div>
    <apexchart width="100%" type="line" :options="options" :series="series"></apexchart>
  </div>
</template>

<script>

export default {
  components: {
  },

  data() {
    return {
      options: {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: ["Apr 22", "May 22", "Jun 22", "Jul 22", "Aug 22", "Sep 22", "Oct 22", "Nov 22", "Dec 22", "Jan 23", "Feb 23", "Mar 23"]
        },
        theme: {
          palette: "palette2"
        },
        title: {
          text: 'Average for each month (all numbers are as a % of maximum value given in last 12 months)'
        },
      },
      series: [
        {
          name: 'Steps',
          data: [56, 23, 56, 78, 90, 100, 12, 32, 78, 0, 12, 4]
        },
        {
          name: 'Social Time (hours)',
          data: [43, 56, 32, 78, 0, 12, 40, 56, 88, 23, 45, 12]
        },
        {
          name: 'Sleep Time',
          data: [ 50, 49, 60, 70, 99, 93, 23, 34, 99, 56, 23, 78]
        },
        {
          name: 'Health score',
          data: [30, 40, 35, 70, 59, 62, 83, 67, 45, 87, 26, 90,]
        }
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
