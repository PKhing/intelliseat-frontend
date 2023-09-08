import { styled } from '@stitches/react'

export const Typography = styled('div', {
  variants: {
    variant: {
      paragraph2: {
        fontFamily: '$roboto',
        fontSize: '14px',
      },
      paragraph1: {
        fontFamily: '$roboto',
        fontSize: '16px',
      },
      header: {
        fontFamily: '$roboto',
        fontSize: '16px',
        fontWeight: 'bold',
      },
      title: {
        fontFamily: '$roboto',
        fontSize: '20px',
        fontWeight: 'bold',
      },
      caption: {
        fontFamily: '$roboto',
        fontSize: '12px',
      },
    },
  },

  defaultVariants: {
    variant: 'paragraph1',
  },
})
