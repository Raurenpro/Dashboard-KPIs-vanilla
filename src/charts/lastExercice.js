export const lastExercice = {
    type: 'doughnut',
    dataKey: 'lastExercice',
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: ['rgb(255, 205, 86)', 'rgba(255, 205, 86, 0.3)'],
          hoverOffset: 4,
          borderWidth: false,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      rotation: -90,
      circumference: 180,
      cutout: '55%',
      plugins: {
        title: {
          display: true,
          text: 'Écart de délai depuis le dernier exercice de gestion de crise réalisé',
          color: 'white',
          font: {
            size: 14,
            weight: 'bold',
          },
          padding: {
            bottom: 10,
          },
        },
        legend: {
          display: false,
        },
        datalabels: {
          display: false,
        },
        centerText: {
          display: true,
          text: '',
          color: 'white',
          font: {
            size: 18,
            weight: 'bold',
          },
        },
  
        tooltip: {
          enabled: false,
        },
      },
    },
    plugins: [
      {
        id: 'centerText',
        beforeDraw: (chart) => {
          const { ctx, width, height } = chart;
          const { color, font } = chart.options.plugins.centerText;
          const data = chart.data.datasets[0].data
          const text = data[1] + ' j'
  
          ctx.save();
          ctx.font = `${font.weight} ${font.size}px sans-serif`;
          ctx.fillStyle = color;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText( text, width / 2, height - 10);
          ctx.restore();
        },
      },
    ],
  };
  