import isSameWeek from 'date-fns/isSameWeek'
import { apiClient } from '../config/axios'
import { handleError } from '../utils/handleError'
import { GetDayResponse, GetWeeksResponse } from './dto'
import { isSameMonth } from 'date-fns'

export class Api {
  @handleError()
  static async getWeek() {
    const res = await apiClient.get<GetWeeksResponse>('/sitdata/days')

    const days = res.data.data.map(({ date, sitHour }) => ({
      date: new Date(date),
      sitHour,
    }))

    const data: { date: Date; sitHour: number }[][] = [[]]

    if (days.length === 0) return data

    let tmp = days[0].date

    for (const { date, sitHour } of days) {
      if (isSameWeek(date, tmp)) {
        data[data.length - 1].push({ date, sitHour })
      } else {
        data.push([{ date, sitHour }])
      }
      tmp = date
    }
    return data
  }

  @handleError()
  static async getMonth() {
    const res = await apiClient.get<GetWeeksResponse>('/sitdata/days')

    const days = res.data.data.map(({ date, sitHour }) => ({
      date: new Date(date),
      sitHour,
    }))

    const data: { date: Date; sitHour: number }[][] = [[]]

    if (days.length === 0) return data

    let tmp = days[0].date

    for (const { date, sitHour } of days) {
      if (isSameMonth(date, tmp)) {
        data[data.length - 1].push({ date, sitHour })
      } else {
        data.push([{ date, sitHour }])
      }
      tmp = date
    }
    return data
  }

  @handleError()
  static async getDay() {
    const res = await apiClient.get<GetDayResponse>('/sitdata/day')

    const data = res.data

    return {
      ...data,
      badPosture: data.badPosture.map(({ side, start, end }) => ({
        side,
        start: new Date(start),
        end: new Date(end),
      })),
    }
  }
}
