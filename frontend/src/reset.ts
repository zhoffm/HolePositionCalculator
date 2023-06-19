export function setupReset(
  resetButton: HTMLButtonElement,
  holeSpacingInput: HTMLInputElement,
  endSpacingInput: HTMLInputElement,
  numHolesInput: HTMLInputElement,
  diameterInputs: HTMLDivElement,
) {
  resetButton.addEventListener('click', () => {
    holeSpacingInput.value = ''
    endSpacingInput.value = ''
    numHolesInput.value = ''
    diameterInputs.innerHTML = ''
  })
}
