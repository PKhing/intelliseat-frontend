import { styled } from '@stitches/react'
import { Typography } from '../../../components/Typography'

const Summary = ({
  total,
  badPosture,
}: {
  total: number
  badPosture: number
}) => {
  return (
    <>
      <Typography variant="h" css={{ color: '$primaryDark', width: '100%' }}>
        summary
      </Typography>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Hour>{total}</Hour>
        <Typography variant="p2" css={{ color: '$primaryDark' }}>
          hours sat total
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Hour>{badPosture}</Hour>
        <Typography variant="p2" css={{ color: '$primaryDark' }}>
          bad posture hours
        </Typography>
      </div>
    </>
  )
}

const Hour = styled('div', {
  fontFamily: '$inter',
  fontSize: '24px',
  fontWeight: 'bold',
  marginRight: '20px',
})

export default Summary
