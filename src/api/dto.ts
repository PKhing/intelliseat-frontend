export interface GetWeeksResponse {
  data: {
    date: string
    sitHour: number
  }[]
}

export interface GetDayResponse {
  consecutiveSitHour: number
  sitTotal: number
  badSitHour: number
  badPosture: [
    {
      start: string
      end: string
      side: string
    }
  ]
}
