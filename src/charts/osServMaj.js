export const osServMaj = {
  type: 'doughnut',
  dataKey: 'osServMaj',
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['rgb(34, 197, 94)', 'rgba(34, 197, 94, 0.3)'],
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
        text: '',
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
          size: 12,
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
        const text = data[0] + ' %'

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
