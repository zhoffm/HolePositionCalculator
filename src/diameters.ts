export function setupDiameterInputs(
    diameterInputsContainer: HTMLDivElement,
    numHolesElement: HTMLInputElement,
) {
    numHolesElement.addEventListener('input', () => {
        const numHoles = parseInt(numHolesElement.value)
        diameterInputsContainer.innerHTML = ''
        for (let i = 0; i < numHoles; i++) {
            diameterInputsContainer.appendChild(document.createElement('input'))
        }
    })
}