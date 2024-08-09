export async function createMetric(metricId, metricConfig, title) {
    const metric = document.getElementById(metricId);
    if (metric) {
        const response = await fetch('/data/data.json');
        const data = await response.json();
        const metricData = data[metricConfig.name];

        const processedMetricData = metricConfig(metricData, title)

        // Injecter le contenu dans l'élément metric
        metric.innerHTML = processedMetricData;
      }
}