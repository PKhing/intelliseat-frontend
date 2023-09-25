import Tab from '../../components/Tab'
import { styled } from '../../config/stitches'
import Graph, { GraphProps } from '../../components/Graph'
import { useEffect, useState } from 'react'
import { Api } from '../../api'
import Detail from '../../components/Detail'

export interface WeekPageProps {
  date: Date
  sitHour: number
}

const WeekPage = () => {
  const [data, setData] = useState<WeekPageProps[][]>()

  useEffect(() => {
    const fetchData = async () => {
      setData(await Api.getWeek())
    }
    fetchData()
  }, [])

  if (!data) return null

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const graphData: GraphProps[] = data[0].map(({ date, sitHour }) => ({
    value: sitHour,
    label: date.toLocaleDateString('en-US', { weekday: 'short' }),
  }))

  graphData[0].isBold = true
  graphData.reverse()

  const tmp = []

  for (let i = 0; i < 7; i++) {
    if (graphData[0].label == days[i]) break
    tmp.push({
      label: days[i],
    })
  }

  graphData.unshift(...tmp)

  for (let i = graphData.length; i < 7; i++) {
    graphData.push({
      label: days[i],
    })
  }

  return (
    <>
      <Tab selectedTab="week" />
      <Title>this week</Title>

      <Graph data={graphData} />
      {data.map((week, idx) => (
        <Detail
          key={idx}
          data={week
            .map(({ date, sitHour }) => ({
              value: sitHour,
              label: date.toLocaleDateString('en-US', { weekday: 'short' }),
            }))
            .reverse()}
          label={
            idx == 0
              ? 'This Week'
              : week[week.length - 1].date.toLocaleDateString('en-GB')
          }
        />
      ))}
    </>
  )
}

const Title = styled('div', {
  fontFamily: '$inter',
  fontSize: '12px',
})

export default WeekPage
