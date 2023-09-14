import Tab from '../../components/Tab'
import { Typography } from '../../components/Typography'
import { styled } from '../../config/stitches'
import Detail from './components/Detail'
import Graph from './components/Graph'

const WeekPage = () => {
  const hour = [5, 8, 4, 2, 10, 9, 3, 4]
  return (
    <>
      <Tab selectedTab="week" />
      <Title>this week</Title>
      <Typography variant="p2" css={{ color: '$primaryDark' }}>
        8 hours daily
      </Typography>
      <Graph hour={hour} />
      <Detail />
      <Detail />
    </>
  )
}

const Title = styled('div', {
  fontFamily: '$inter',
  fontSize: '12px',
})

export default WeekPage
