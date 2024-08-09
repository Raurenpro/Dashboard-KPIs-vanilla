export const nbConnIP = {
  type: 'bar',
  dataKey: 'nbConnIP',
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
        display: true,
        color: 'white',
        font: {
          size: 18,
          weight: 'bold',
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
        },
        grid: {
          color: 'rgb(63, 63, 70)',
        },
        min: 0,
      },
    },
  },
};
