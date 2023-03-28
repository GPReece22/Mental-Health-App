<template>
  <div>
    <apexchart width="100%" type="area" :options="options" :series="series"></apexchart>
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
          categories: ["24/02", "25/02", "26/02", "27/02", "28/02", "01/03", "02/03", "03/03", "04/03", "05/03",
            "06/03", "07/03", "08/03", "09/03", "10/03", "11/03", "12/03", "13/03", "14/03", "15/03", "16/03", "17/03",
            "18/03", "19/03", "20/03", "21/03", "22/03", "23/03", "24/03", "25/03", "26/03"]
        },
        theme: {
          palette: "palette2"
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Last 31 days data (all numbers are as a % of maximum value given in last 31 days)'
        },
      },
      series: [
        {
          name: 'Steps',
          data: [56, 23, 56, 78, 30, 40, 45, 50, 49, 60, 70, 45, 23, 76, 90, 43, 56, 32, 78, 0, 12, 40, 99, 93, 23, 100, 12, 45, 23, 67, 33]
        },
        {
          name: 'Social Time',
          data: [43, 56, 32, 78, 0, 12, 40, 56, 23, 56, 78, 30, 40, 45, 50, 49, 60, 70, 99, 93, 23, 30, 40, 45, 50, 49, 60, 70, 45, 23, 76]
        },
        {
          name: 'Sleep Time',
          data: [ 50, 49, 60, 70, 99, 93, 23, 30, 40, 45, 50, 49, 60, 49, 60, 70, 43, 56, 32, 78, 0, 78, 30, 40, 45, 50, 49, 60, 70, 45, 23]
        },
        {
          name: 'Health score',
          data: [30, 40, 45, 50, 49, 60, 70, 43, 56, 32, 78, 0, 12, 56, 23, 56, 78, 30, 40, 45, 50, 49, 60, 70, 40, 99, 93, 23, 45, 23, 76]
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
