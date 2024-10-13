export function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-');
  const monthNum = parseInt(month, 10);

  return `${monthNum}월 ${parseInt(day, 10)}일`;
}
