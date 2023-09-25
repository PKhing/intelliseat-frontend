import { useEffect, useState } from 'react'
import Tab from '../../components/Tab'
import { styled } from '../../config/stitches'
import Detail from './components/Detail'
import SitHour from './components/SitHour'
import Summary from './components/Summary'
import { Api } from '../../api'

export interface DayPageProps {
  consecutiveSitHour: number
  sitTotal: number
  badSitHour: number
  badPosture: {
    start: Date
    end: Date
    side: string
  }[]
}

const DayPage = () => {
  const [data, setData] = useState<DayPageProps>()

  useEffect(() => {
    const fetchData = async () => {
      setData(await Api.getDay())
    }
    fetchData()
  }, [])

  if (!data) return null

  const { consecutiveSitHour, sitTotal, badSitHour, badPosture } = data

  return (
    <>
      <Tab selectedTab="day" />
      <Title>today</Title>
      <SitHour hourSit={consecutiveSitHour} />
      <Summary total={sitTotal} badPosture={badSitHour} />
      <Detail detail={badPosture} />
    </>
  )
}

const Title = styled('div', {
  fontFamily: '$inter',
  fontSize: '12px',
})

export default DayPage
