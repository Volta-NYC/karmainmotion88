/** Format a USD price, dropping cents when whole. */
export function formatPrice(value: number): string {
  return value % 1 === 0
    ? `$${value}`
    : `$${value.toFixed(2)}`
}
