import { styled } from '../../config/stitches'

export const Typography = styled('div', {
  color: '$black',
  variants: {
    variant: {
      p2: {
        fontFamily: '$roboto',
        fontSize: '14px',
      },
      p1: {
        fontFamily: '$roboto',
        fontSize: '16px',
      },
      h: {
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
