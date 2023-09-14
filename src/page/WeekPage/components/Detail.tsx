import { styled } from '../../../config/stitches'

const Detail = () => {
  const hour = [5, 8, 4, 2, 10, 9, 3, 4]
  const day = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']

  return (
    <>
      <TitleContainer>
        <Text>This Week</Text>
        <Text>56 hours sat total</Text>
      </TitleContainer>
      <DetailContainer>
        {day.map((d, i) => (
          <>
            <Text css={{ fontWeight: 700, color: '$gray' }}>{d}</Text>
            <Text> {hour[i]} hours sat</Text>
          </>
        ))}
      </DetailContainer>
    </>
  )
}

const DetailContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '15px',
  width: '100%',
})

const TitleContainer = styled('div', {
  padding: '5px 10px',
  backgroundColor: '$primaryLight',
  borderRadius: '8px',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
})

const Text = styled('div', {
  fontFamily: '$inter',
  fontSize: '12px',
  color: '$black',
})

export default Detail
