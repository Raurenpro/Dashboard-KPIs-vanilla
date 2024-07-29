export const oradad = {
    type: 'doughnut',
    dataKey: 'oradad',
    data: {
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: ['rgb(101 163 13)', 'rgba(101, 163, 13, 0.3)'],
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
          text: 'Audit ORADAD',
          color: 'white',
          font: {
            size: 18,
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
          text: 'Niveau 4',
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
          const { text, color, font } = chart.options.plugins.centerText;
  
          ctx.save();
          ctx.font = `${font.weight} ${font.size}px sans-serif`;
          ctx.fillStyle = color;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(text, width / 2, height - 20);
          ctx.restore();
        },
      },
    ],
  };
  