import { styled } from '../../../config/stitches'
import { Typography } from '../../../components/Typography'

const SitHour = ({ hourSit }: { hourSit: number }) => {
  return (
    <>
      <Typography variant="p1" css={{ color: '$primaryDark' }}>
        you've been sitting for
      </Typography>
      <HourContainer2>
        <HourContainer>
          <Hour>{hourSit}</Hour>
          <Typography
            variant="caption"
            css={{ color: '$primaryDark', marginTop: '-10px' }}
          >
            hours
          </Typography>
        </HourContainer>
      </HourContainer2>
      <Typography variant="p2">ลุกบ้าง!!! 💪</Typography>
    </>
  )
}

const HourContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '95px',
  height: '95px',
  borderRadius: '50%',
  backgroundColor: '$primaryLight',
  flexDirection: 'column',
})

const HourContainer2 = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '110px',
  height: '110px',
  borderRadius: '50%',
  border: '2px solid $primaryLight',
})

const Hour = styled('div', {
  fontFamily: '$inter',
  fontSize: '36px',
  fontWeight: 'bold',
  color: '$black',
})
export default SitHour
