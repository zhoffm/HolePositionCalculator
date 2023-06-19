import { setupDiameterInputs } from './diameters.ts'
import { setupCalculateButton, setupCalculatorOutput } from './holeCalculator.ts'
import { setupReset } from './reset.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Hole Position Calculator</h1>
    <div id="initialInput">
      <label for="numHoles">Number of Holes:</label>
      <input id="numHoles" type="number" min=2 max=10 increment=1 required/>
      <div id="holeDiameters"></div>
    </div>
    <div id="spacingInputs">
      <label for="holeSpacing">Hole Spacing in Inches:</label>
      <input id="holeSpacing" type="number" inputmode="numeric" min=0 max=100 step=0.0001 required/>
      <label for="endSpacing">Distance from End to First Hole in Inches:</label>
      <input id="endSpacing" type="number" min=0 max=100 step=0.0001 required/>
    </div>
    <div>
      <button id="calculate" name="calculate" disabled>Calculate</button>
      <button id="reset" name="reset">Reset</button>
    </div>
    <div>
      <label for="results">Hole Center Positions:</label>
      <output id="results"></output>
    </div>
  </div>
`

const holeSpacingInput = document.querySelector<HTMLInputElement>('#holeSpacing')!
const endSpacingInput = document.querySelector<HTMLInputElement>('#endSpacing')!
const numHolesInput = document.querySelector<HTMLInputElement>('#numHoles')!
const diameterInputs = document.querySelector<HTMLDivElement>('#holeDiameters')!
const calculateButton = document.querySelector<HTMLButtonElement>('#calculate')!
const resetButton = document.querySelector<HTMLButtonElement>('#reset')!
const resultsOutput = document.querySelector<HTMLOutputElement>('#results')!

setupDiameterInputs(diameterInputs, numHolesInput)
setupCalculateButton(numHolesInput, calculateButton)
setupCalculatorOutput(calculateButton, diameterInputs, holeSpacingInput, endSpacingInput, resultsOutput)
setupReset(resetButton, holeSpacingInput, endSpacingInput, numHolesInput, diameterInputs)
