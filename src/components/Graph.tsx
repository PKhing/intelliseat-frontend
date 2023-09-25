import { styled } from '../config/stitches'
import { Typography } from './Typography'

export interface GraphProps {
  value?: number
  label?: string
  isBold?: boolean
}

const Graph = ({ data }: { data: GraphProps[] }) => {
  const average =
    data.reduce((acc, { value }) => acc + (value ?? 0), 0) /
    data.reduce((acc, { value }) => acc + (value ? 1 : 0), 0)
  return (
    <>
      <Typography variant="p2" css={{ color: '$primaryDark' }}>
        {average.toFixed(1)} hours daily
      </Typography>
      <Container>
        {data.map(({ value, label, isBold }, idx) => (
          <div
            key={idx}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '6px',
            }}
          >
            <GraphItem
              css={{
                height: `${(value ?? 0) * 10}px`,
              }}
            />
            <GraphItemText
              css={{
                fontWeight: isBold ? 'bold' : 'normal',
              }}
            >
              {label}
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
    </>
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
  minHeight: '90px',
})

const GraphItem = styled('div', {
  width: '6px',
  borderRadius: '4px',
  backgroundColor: '$primary',
  zIndex: 1,
})

const GraphItemText = styled('div', {
  fontFamily: '$inter',
  fontSize: '12px',
  color: '$black',
  minHeight: '18px',
})

export default Graph
