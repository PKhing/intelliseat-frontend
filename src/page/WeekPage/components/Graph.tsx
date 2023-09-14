import { styled } from '../../../config/stitches'

const Graph = ({ hour }: { hour: number[] }) => {
  const day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

  //get today day of week
  const today = new Date().getDay()

  return (
    <Container>
      {day.map((d, i) => (
        <div
          key={i}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <GraphItem
            css={{
              height: `${hour[i] * 10}px`,
            }}
          />
          <GraphItemText
            css={{
              fontWeight: i === today - 1 ? 'bold' : 'normal',
            }}
          >
            {d}
          </GraphItemText>
        </div>
      ))}
      <div
        style={{
          position: 'absolute',
          bottom: '18px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          transform: 'translateY(50%)',
        }}
      >
        <Line /> <GraphItemText css={{ color: '$primary' }}>0</GraphItemText>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '98px',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          transform: 'translateY(50%)',
        }}
      >
        <Line /> <GraphItemText css={{ color: '$primary' }}>8</GraphItemText>
      </div>
    </Container>
  )
}

const Line = styled('div', {
  width: 'calc(100% - 20px)',
  height: '1px',
  backgroundColor: '$primaryLight',
  zIndex: -1,
})

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  width: '100%',
  padding: '0 10px',
  position: 'relative',
})

const GraphItem = styled('div', {
  width: '7px',
  borderRadius: '4px',
  backgroundColor: '$primary',
  zIndex: 1,
})

const GraphItemText = styled('div', {
  fontFamily: '$inter',
  fontSize: '12px',
  color: '$black',
})

export default Graph
