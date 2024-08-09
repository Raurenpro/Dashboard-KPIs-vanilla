export const couvScanVul = {
  type: 'line',
  dataKey: 'couvScanVul',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        align: 'start',
        display: true,
        text: '',
        color: 'white',
        font: {
          size: 14,
          weight: 'bold',
        },
        padding: {
          bottom: 25,
        },
      },
      legend: {
        display: false,
      },

      datalabels: {
        display: false,
      },

      tooltip: {
        intersect: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: 'rgb(161 161 170)',
        },
        grid: {
          color: 'rgb(63, 63, 70)',
        },
      },
      y: {
        ticks: {
          color: 'rgb(161 161 170)',
          callback: function (value, index, ticks) {
            return value + ' %';
          },
        },
        grid: {
          color: 'rgb(63, 63, 70)',
        },
        min: 0,
        max: 100,
      },
    },
  },
};
