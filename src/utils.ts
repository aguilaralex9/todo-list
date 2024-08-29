import { Task } from './types';

export function createTaskElement(
    task: Task,
    toggleTaskCompletion: (taskId: number, titleElement: HTMLSpanElement) => void,
    deleteTask: (taskId: number, taskElement: HTMLDivElement) => void
  ): HTMLDivElement {
    const taskElement = document.createElement('div');
    taskElement.className = 'flex items-center justify-between w-full p-2 bg-gray-100 rounded mt-2';
  
    const titleElement = document.createElement('span');
    titleElement.className = `flex-1 ${task.completed ? 'line-through' : ''}`;
    titleElement.textContent = task.title;
  
    const completeButton = document.createElement('input');
    completeButton.type = 'checkbox';
    completeButton.checked = task.completed;
    completeButton.className = 'checkbox checkbox-info checkbox-sm mr-2';
    completeButton.addEventListener('change', () => toggleTaskCompletion(task.id, titleElement));
  
    const deleteButton = document.createElement('button');
    deleteButton.className = 'btn btn-error btn-sm ml-2 p-1';
  
    deleteButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    `;
    deleteButton.addEventListener('click', () => deleteTask(task.id, taskElement));
  
    taskElement.appendChild(completeButton);
    taskElement.appendChild(titleElement);
    taskElement.appendChild(deleteButton);
  
    return taskElement;
  }
  
  export function toggleTaskCompletion(tasks: Task[], taskId: number, titleElement: HTMLSpanElement) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      titleElement.classList.toggle('line-through');
    }
  }
  
  export function deleteTask(tasks: Task[], taskId: number, taskElement: HTMLDivElement) {
    const taskIndex = tasks.findIndex(t => t.id === taskId);
    if (taskIndex > -1) {
      tasks.splice(taskIndex, 1);
      taskElement.remove();
    }
  }