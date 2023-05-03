function hexToRgb(hex: string): string {
  // Remove the '#' character if it exists
  hex = hex.replace('#', '');

  // Parse the hex color components into decimal values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Return the RGB color string
  return `rgb(${r}, ${g}, ${b})`;
}

export default hexToRgb;
