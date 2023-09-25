import { Typography } from '../../../components/Typography'
import { styled } from '../../../config/stitches'

const Detail = ({
  detail,
}: {
  detail: { start: Date; end: Date; side: string }[]
}) => {
  return (
    <>
      {detail.map(({ start, end, side }) => (
        <DetailItem>
          <Typography variant="p2">
            {start.getHours()}:{start.getMinutes()} - {end.getHours()}:
            {end.getMinutes()}
          </Typography>
          <Typography variant="p2">
            ทิ้งน้ำหนักทาง{side === 'left' ? 'ซ้าย' : 'ขวา'}
          </Typography>
          <img src={side === 'left' ? 'chair-left.svg' : 'chair-right.svg'} />
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
