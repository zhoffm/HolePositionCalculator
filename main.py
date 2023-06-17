def get_hole_center_positions(hole_spacing: float, end_spacing: float, hole_diameters: list[float]) -> list[float]:
    center_positions: list[float] = []
    for idx, hole_diameter in enumerate(hole_diameters):
        if idx == 0:
            center_positions.append(end_spacing)
            continue
        center_position = center_positions[idx - 1] + hole_spacing + (hole_diameter / 2.0)
        center_positions.append(center_position)
    return center_positions


if __name__ == "__main__":
    holeSpacing: float = 0.375
    endSpacing: float = 0.75
    holeDiameters: list[float] = [3.0 / 32.0, 7.0 / 64.0, 1.0 / 8.0, 9.0 / 64.0, 5.0 / 32.0, 3.0 / 16.0, 7.0 / 32.0, 1.0 / 4.0]
    centerPositions: list[float] = get_hole_center_positions(holeSpacing, endSpacing, holeDiameters)
    print(f"Hole Center Positions in Inches: {centerPositions}")
