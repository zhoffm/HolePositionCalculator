export function setupCalculateButton(
    numHolesElement: HTMLInputElement,
    calculateButton: HTMLButtonElement,
) {
    numHolesElement.addEventListener('input', () => {
        let currentDiameterInputs = document.getElementById('holeDiameters')!.children
        if (currentDiameterInputs.length !== 0) {
            calculateButton.removeAttribute('disabled')
        } else {
            calculateButton.disabled = true
        }
    })
}
 
export function setupCalculatorOutput(
    calculateButton: HTMLButtonElement,
    diameterInputs: HTMLDivElement,
    holeSpacingInput: HTMLInputElement,
    endSpacingInput: HTMLInputElement,
    resultsOutput: HTMLOutputElement,
) {
    calculateButton.addEventListener('click', () => {
        const diameters: number[] = []
        const currentDiameterInputs = diameterInputs.children
        for (let diameterInput of currentDiameterInputs) {
            const rawDiameter = (diameterInput as HTMLInputElement).value
            let diameter = Number(rawDiameter)
            if (isNaN(diameter) && rawDiameter.includes('/')) { 
                diameter = parseFraction(rawDiameter)
            }
            
            diameters.push(diameter)
        }
        console.log(`Number of holes: ${diameters.length}`)
        console.log(`Given diameters: ${diameters}`)

        const holeSpacing: number = Number(holeSpacingInput.value)
        const endSpacing: number = Number(endSpacingInput.value)
        console.log(`Given holeSpacing: ${holeSpacing} and endSpacing: ${endSpacing}`)

        const results = calculcateHolePositions(holeSpacing, endSpacing, diameters)
        console.log(`Calculated positions: ${results}`)
        resultsOutput.innerText = JSON.stringify(results)
    })
}

function parseFraction(fractionString: string): number {
    const [numerator, denominator] = fractionString.split('/').map(Number)
    return numerator /denominator
}

function calculcateHolePositions(
    holeSpacing: number,
    endSpacing: number,
    holeDiameters: number[],
): number[] { 
    let centerPositions: number[] = [];
    for (let i = 0; i < holeDiameters.length; i++) {
        if (i === 0) {
            centerPositions[i] = endSpacing
            continue
        }
        const prevCenterPosition = centerPositions[i - 1]
        const prevHoleRadius = (holeDiameters[i - 1] / 2)
        const currHoleRadius = (holeDiameters[i] / 2)
		centerPositions[i] = prevCenterPosition + prevHoleRadius + holeSpacing + currHoleRadius
    }
    return centerPositions;
}