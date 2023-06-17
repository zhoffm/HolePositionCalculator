package main

import (
	"fmt"
)

func main() {
	holeSpacing := 0.375
	endSpacing := 0.75
	holeDiameters := []float64{3.0 / 32.0, 7.0 / 64.0, 1.0 / 8.0, 9.0 / 64.0, 5.0 / 32.0, 3.0 / 16.0, 7.0 / 32.0, 1.0 / 4.0}
	centerPositions := GetHoleCenterPositions(holeSpacing, endSpacing, holeDiameters)
	fmt.Printf("Hole Center Positions in Inches: %v", centerPositions)
}

func GetHoleCenterPositions(holeSpacing, endSpacing float64, holeDiameters []float64) (centerPositions []float64) {
	centerPositions = make([]float64, len(holeDiameters))
	for idx, holeDiameter := range holeDiameters {
		if idx == 0 {
			centerPositions[idx] = endSpacing
			continue
		}
		centerPositions[idx] = centerPositions[idx-1] + (holeDiameters[idx-1] / 2) + holeSpacing + (holeDiameter / 2)
	}
	return centerPositions
}
