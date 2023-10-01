export interface GetWeeksResponse {
  data: {
    date: string
    sitHour: number
  }[]
}

export interface GetDayResponse {
  consecutiveSitMin: number
  sitTotal: number
  badSitMin: number
  badPosture: [
    {
      start: string
      end: string
      side: string
    }
  ]
}
