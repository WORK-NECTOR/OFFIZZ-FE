/** 0 ~ 24시를 1 ~ 12 사이의 시로 바꿔주는 함수 */
export function convertHourFormat(hour: number) {
  return hour % 12 === 0 ? 12 : hour % 12;
}

/** 0 ~ 60분을 0 ~ 100%로 바꿔주는 함수 */
export function convertMintoPercent(minute: number) {
  if (minute == 0) return 0;
  else return (minute / 60) * 100;
}

export function getHour(time: string) {
  return Number(time.split(':')[0]);
}

export function getMinute(time: string) {
  return Number(time.split(':')[1]);
}
