import { Typography } from '../../../components/Typography'
import { styled } from '../../../config/stitches'

const Detail = ({
  detail,
}: {
  detail: { startTime: Date; endTime: Date; type: 'left' | 'right' }[]
}) => {
  return (
    <>
      {detail.map(({ startTime, endTime, type }) => (
        <DetailItem>
          <Typography variant="p2">
            {startTime.getHours()}:{startTime.getMinutes()} -{' '}
            {endTime.getHours()}:{endTime.getMinutes()}
          </Typography>
          <Typography variant="p2">
            ทิ้งน้ำหนักทาง{type === 'left' ? 'ซ้าย' : 'ขวา'}
          </Typography>
          <img src={type === 'left' ? 'chair-left.svg' : 'chair-right.svg'} />
        </DetailItem>
      ))}
    </>
  )
}

const DetailItem = styled('div', {
  backgroundColor: '$primaryLight',
  width: '100%',
  padding: '7px 10px 7px 15px',
  borderRadius: '8px',
  boxShadow: '2px 2px 5px 0px rgba(0, 0, 0, 0.10)',
  display: 'grid',
  gridTemplateColumns: 'max-content 1fr max-content',
  gap: '10px',
  alignItems: 'center',
})

export default Detail
