// src/component.js
export function createComponent(chartId) {
  const container = document.createElement('div');
  container.className =
    'flex w-full justify-center bg-zinc-800 rounded-xl border border-zinc-600 p-5';

  const canvas = document.createElement('canvas');
  canvas.id = chartId;
  container.appendChild(canvas);

  return container;
}
