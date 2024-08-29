import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="flex flex-col justify-center items-center h-screen bg-blue-100">
    <h1 class="text-3xl font-bold text-blue-700">
      TODO LIST
    </h1>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
