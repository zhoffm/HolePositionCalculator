import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hole Position Calculator</h1>
    <div>
      <label for="numHoles">Number of Holes:</label>
      <input id="numHoles" type="number" min=2 max=10></input>
    </div>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
