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
          text: 'Average for each month (all numbers are as a % of maximum value given in last 31 days)'
        },
      },
      series: [
        {
          name: 'Steps',
          data: [56, 23, 56, 78, 90, 100, 12]
        },
        {
          name: 'Social Time (hours)',
          data: [43, 56, 32, 78, 0, 12, 40]
        },
        {
          name: 'Health score',
          data: [30, 40, 45, 50, 49, 60, 70]
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
