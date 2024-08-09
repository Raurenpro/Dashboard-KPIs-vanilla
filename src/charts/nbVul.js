export const nbVul = {
  type: 'doughnut',
  dataKey: 'nbVul',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(235, 105, 56)',
          'rgb(255, 205, 86)',
          'rgb(54, 162, 235)',
        ],
        hoverOffset: 4,
        borderColor: 'rgb(39, 39, 42)',
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
        position: 'right',
        labels: {
          color: 'white',
          font: {
            size: 17,
          },
          padding: 20,
        },
      },
      datalabels: {
        color: 'white',
        font: {
          size: 18,
          weight: 'bold',
        },
        formatter: (value, context) => {
          return value; // Affiche la valeur
        },
      },
    },
  },
};
