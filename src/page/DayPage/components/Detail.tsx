import { format } from 'date-fns'
import { Typography } from '../../../components/Typography'
import { styled } from '../../../config/stitches'

const Detail = ({
  detail,
}: {
  detail: { start: Date; end: Date; side: string }[]
}) => {
  if (detail.length === 0) return null

  const formattedDetail = detail.map(({ start, end, side }) => ({
    start: format(start, 'HH:mm'),
    end: format(end, 'HH:mm'),
    side,
  }))

  const grouppedDetail = [formattedDetail[0]]
  let end_bf = formattedDetail[0].end
  for (let i = 1; i < formattedDetail.length; i++) {
    if (formattedDetail[i].start == end_bf) {
      end_bf = formattedDetail[i].end
      grouppedDetail[grouppedDetail.length - 1].end = end_bf
    } else {
      grouppedDetail.push(formattedDetail[i])
      end_bf = formattedDetail[i].end
    }
  }

  grouppedDetail.reverse()

  return (
    <>
      {grouppedDetail.map(({ start, end, side }) => (
        <DetailItem key={String(start)}>
          <Typography variant="p2">
            {start} - {end}
          </Typography>
          <Typography variant="p2">
            ทิ้งน้ำหนักทาง{side === 'LEFT' ? 'ซ้าย' : 'ขวา'}
          </Typography>
          <img src={side === 'LEFT' ? 'chair-left.svg' : 'chair-right.svg'} />
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
