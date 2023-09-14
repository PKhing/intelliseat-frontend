import Tab from '../../components/Tab'
import { styled } from '../../config/stitches'
import Detail from './components/Detail'
import SitHour from './components/SitHour'
import Summary from './components/Summary'

const DayPage = () => {
  const hourSit = 6
  const detail = [
    {
      startTime: new Date(),
      endTime: new Date(),
      type: 'left',
    } as const,
    {
      startTime: new Date(),
      endTime: new Date(),
      type: 'right',
    } as const,
  ]

  return (
    <>
      <Tab selectedTab="day" />
      <Title>today</Title>
      <SitHour hourSit={hourSit} />
      <Summary total={8} badPosture={2} />
      <Detail detail={detail} />
    </>
  )
}

const Title = styled('div', {
  fontFamily: '$inter',
  fontSize: '12px',
})

export default DayPage
