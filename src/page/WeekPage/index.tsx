import Tab from '../../components/Tab'
import { styled } from '../../config/stitches'
import Detail from '../../components/Detail'
import Graph from '../../components/Graph'

const WeekPage = () => {
  const hours = [
    {
      value: 1,
      label: 'Mon',
    },
    {
      value: 2,
      label: 'Tue',
    },
    { value: 3, label: 'Wed' },
    { value: 4, label: 'Thu' },
    { value: 5, label: 'Fri' },
    { value: 0, label: 'Sat' },
    { label: 'Sun', isBold: true },
  ]
  return (
    <>
      <Tab selectedTab="week" />
      <Title>this week</Title>

      <Graph data={hours} />
      <Detail data={hours} label="This Week" />
      <Detail data={hours} label="This Week" />
    </>
  )
}

const Title = styled('div', {
  fontFamily: '$inter',
  fontSize: '12px',
})

export default WeekPage
