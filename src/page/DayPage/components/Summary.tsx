import { styled } from '@stitches/react'
import { Typography } from '../../../components/Typography'
import { getUnit, getValue } from '../../../utils/getValue'

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
        <Hour>{getValue(total)}</Hour>
        <Typography variant="p2" css={{ color: '$primaryDark' }}>
          {getUnit(total)} sat total
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
        <Hour>{getValue(badPosture)}</Hour>
        <Typography variant="p2" css={{ color: '$primaryDark' }}>
          bad posture {getUnit(badPosture)}
        </Typography>
      </div>
    </>
  )
}

const Hour = styled('div', {
  fontFamily: '$inter',
  color: '$black',
  fontSize: '24px',
  fontWeight: 'bold',
  marginRight: '20px',
})

export default Summary
