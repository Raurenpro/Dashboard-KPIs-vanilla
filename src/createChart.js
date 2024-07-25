import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

export async function createChart(chartId, chartConfig) {
  const ctx = document.getElementById(chartId);
  if (ctx) {
    const response = await fetch('/data/data.json');
    const data = await response.json();
    const chartData = data[chartConfig.dataKey];

    const config = {
      ...chartConfig,
      data: {
        labels: chartData.labels,
        datasets: chartConfig.data.datasets.map((dataset) => ({
          ...dataset,
          data: chartData.data,
        })),
      },
    };

    new Chart(ctx, config);
  }
}
