import { useEffect, useState } from 'react'
import Tab from '../../components/Tab'
import { styled } from '../../config/stitches'
import Detail from './components/Detail'
import SitHour from './components/SitHour'
import Summary from './components/Summary'
import { Api } from '../../api'

export interface DayPageProps {
  consecutiveSitMin: number
  sitTotal: number
  badSitMin: number
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

  const { consecutiveSitMin, sitTotal, badSitMin, badPosture } = data

  return (
    <>
      <Tab selectedTab="day" />
      <Title>today</Title>
      <SitHour minSit={consecutiveSitMin} />
      <Summary total={sitTotal} badPosture={badSitMin} />
      <Detail detail={badPosture} />
    </>
  )
}

const Title = styled('div', {
  fontFamily: '$inter',
  fontSize: '12px',
})

export default DayPage
