export function convertHourFormat(hour: number) {
  return hour % 12 === 0 ? 12 : hour % 12;
}
