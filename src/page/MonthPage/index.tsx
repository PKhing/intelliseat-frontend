import Tab from '../../components/Tab'
import { styled } from '../../config/stitches'
import Graph, { GraphProps } from '../../components/Graph'
import { useEffect, useState } from 'react'
import { Api } from '../../api'
import Detail from '../../components/Detail'
import { getDaysInMonth } from 'date-fns'

export interface WeekPageProps {
  date: Date
  sitHour: number
}

const MonthPage = () => {
  const [data, setData] = useState<WeekPageProps[][]>()

  useEffect(() => {
    const fetchData = async () => {
      setData(await Api.getMonth())
    }
    fetchData()
  }, [])

  if (!data) return null

  const graphData: GraphProps[] = data[0]
    .map(({ date, sitHour }) => ({
      value: sitHour,
      label: String(date.getDate()),
    }))
    .reverse()
  console.log(graphData[0].label)

  for (let i = Number(graphData[0].label) - 1; i > 0; i--) {
    graphData.unshift({
      label: String(i),
    })
  }

  for (let i = graphData.length; i < getDaysInMonth(new Date()); i++) {
    graphData.push({
      label: String(i + 1),
    })
  }

  for (let i = 0; i < graphData.length; i++) {
    if ((i + 1) % 5 != 0 && i != 0) {
      graphData[i].label = undefined
    }
  }

  return (
    <>
      <Tab selectedTab="month" />
      <Title>this month</Title>

      <Graph data={graphData} />
      {data.map((month, idx) => (
        <Detail
          key={idx}
          data={month
            .map(({ date, sitHour }) => ({
              value: sitHour,
              label: String(date.getDate()),
            }))
            .reverse()}
          label={
            idx === 0
              ? 'This Month'
              : month[0].date.toLocaleDateString('en-US', { month: 'long' })
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

export default MonthPage
