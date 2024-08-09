export function createComponentChart(chartId) {
  const template = `
    <div class="flex w-full justify-center bg-zinc-800 rounded-xl border border-zinc-600 p-5">
      <canvas id="${chartId}"></canvas>
    </div>
  `;

  const container = document.createElement('div');
  container.innerHTML = template.trim();

  // Retourner le premier élément enfant du container, qui est notre div avec le canvas
  return container.firstChild;
}