const getDragAfterElement = (container, y) => {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')];

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    if (offset < 0 && offset > closest.offset) {
      return { offset, element: child };
    }
    return closest;
  }, { offset: Number.NEGATIVE_INFINITY }).element;
};

const dragAndDrop = (tasks) => {
  const dots = [];
  const draggables = document.querySelectorAll('.draggable');
  const container = document.getElementById('to-do-list');

  for (let i = 0; i < tasks.getTasks().length; i += 1) {
    dots.push(document.getElementById(`dots${i}`));
  }
  draggables.forEach((draggable) => {
    draggable.addEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.addEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });
  draggables.forEach((draggable) => {
    draggable.removeEventListener('dragstart', () => {
      draggable.classList.add('dragging');
    });

    draggable.removeEventListener('dragend', () => {
      draggable.classList.remove('dragging');
    });
  });
  container.addEventListener('dragover', (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector('.dragging');
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
};

export default (dragAndDrop);