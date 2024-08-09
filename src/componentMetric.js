export function createComponentMetric(metricId) {
    const template = `
      <div class="flex w-full" id="${metricId}">
      </div>
    `;
  
    const container = document.createElement('div');
    container.innerHTML = template.trim();
  
    // Retourner le premier élément enfant du container, qui est notre div avec le canvas
    return container.firstChild;
  }