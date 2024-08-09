export const pasPresta = {
    type: 'pie',
    dataKey: 'pasPresta',
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: [
            'rgb(34, 197, 94)',
            'rgb(255, 99, 132)',
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
            let totalValues = 0;

            for (let index in context.dataset.data) {
                totalValues += context.dataset.data[index]
            }

            let percentage = (value * 100 / totalValues).toFixed(0);
            return percentage + ' %'; // Affiche la valeur
          },
        },
      },
    },
  };
  