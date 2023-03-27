<template>
  <div>
    <apexchart width="100%" type="heatmap" :options="options" :series="series"></apexchart>
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
          categories: ["20/03", "21/03", "22/03", "23/03", "24/03", "25/03", "26/03"]
        },
        theme: {
          palette: "palette2"
        },
        title: {
          text: 'HeatMap of last 7 days data (all numbers are as a % of maximum value given in last 31 days)'
        },
        distributed: true,
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
