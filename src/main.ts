import './style.css'
import { Task } from './types';
import { createTaskElement, toggleTaskCompletion, deleteTask } from './utils';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex flex-col justify-center items-center h-screen bg-blue-200">
    <div class="bg-white rounded-lg drop-shadow-md p-6 flex flex-col flex-start">
      <h1 class="text-3xl font-bold text-blue-500">
        TODO LIST
      </h1>
      <div class="flex mt-6 gap-2">
        <input id="task-input" type="text" placeholder="Type task name" class="input input-bordered input-info w-full max-w-xs" />
        <button id="add-task" class="btn">Add Task</button>
      </div>
      <div id="task-list" class="flex flex-col items-start w-full mt-4"></div>
    </div>
  </div>
`
const taskInput = document.querySelector<HTMLInputElement>('#task-input')!;
const addTaskButton = document.querySelector<HTMLButtonElement>('#add-task')!;
const taskListContainer = document.querySelector<HTMLDivElement>('#task-list')!;

const tasks: Task[] = [];
let taskIdCounter = 1;

function addTask(title: string) {
  const newTask: Task = { id: taskIdCounter++, title, completed: false };
  tasks.push(newTask);
  const taskElement = createTaskElement(newTask, toggleCompletionHandler, deleteTaskHandler);
  taskListContainer.appendChild(taskElement);
}

function toggleCompletionHandler(taskId: number, titleElement: HTMLSpanElement) {
  toggleTaskCompletion(tasks, taskId, titleElement);
}

function deleteTaskHandler(taskId: number, taskElement: HTMLDivElement) {
  deleteTask(tasks, taskId, taskElement);
}

addTaskButton.addEventListener('click', () => {
  if (taskInput.value.trim() !== '') {
    addTask(taskInput.value.trim());
    taskInput.value = '';
  }
});
