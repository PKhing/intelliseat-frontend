import React from 'react'
import { styled } from '../config/stitches'
export interface DetailProps {
  data: {
    value?: number
    label?: string
  }[]
  label: string
}
const Detail = ({ label, data }: DetailProps) => {
  const total = data.reduce((acc, { value }) => acc + (value ?? 0), 0)

  return (
    <>
      <TitleContainer>
        <Text>{label}</Text>
        <Text>{Number(total.toFixed(2))} hours sat total</Text>
      </TitleContainer>
      <DetailContainer>
        {data.map(({ value, label }, idx) => {
          if (value === undefined) return null
          return (
            <React.Fragment key={idx}>
              <Text css={{ fontWeight: 700, color: '$gray' }}>{label}</Text>
              <Text> {Number(value.toFixed(2))} hours sat</Text>
            </React.Fragment>
          )
        })}
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
