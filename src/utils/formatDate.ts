export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-');
  const monthNum = parseInt(month);

  return `${monthNum}월 ${parseInt(day)}일`;
}
