export const tauxDispoSI = {
  type: 'bar',
  dataKey: 'tauxDispoSI',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.7)',
        borderWidth: 2,
        borderRadius: 5,
      },
    ],
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      title: {
        align: 'start',
        display: true,
        text: 'Taux de disponibilité du SI',
        color: 'white',
        font: {
          size: 24,
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
        display: true,
        color: 'white',
        font: {
          size: 18,
          weight: 'bold',
        },
        formatter: function (value, context) {
          return value + ' %';
        },
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
