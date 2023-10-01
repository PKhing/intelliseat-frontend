export const getValue = (min: number) => {
  if (min < 60) return min
  return (min / 60).toPrecision(1)
}

export const getUnit = (min: number) => {
  if (min < 60) return 'minutes'
  return 'hours'
}
