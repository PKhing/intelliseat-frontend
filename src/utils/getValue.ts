export const getValue = (min: number) => {
  if (min < 60) return min
  return Number((min / 60).toFixed(2))
}

export const getUnit = (min: number) => {
  if (min < 60) return 'minutes'
  return 'hours'
}
