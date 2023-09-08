import * as Stitches from '@stitches/react'

export const { styled, keyframes, getCssText, config } =
  Stitches.createStitches({
    theme: {
      colors: {
        primaryLight: '#BCEDED',
        primary: '#2BBABA',
        primaryDark: '#006868',
        black: '#18023C',
        gray: '#7E7788',
      },
      fonts: {
        roboto: "'Roboto', sans-serif",
        inter: "'Inter', sans-serif",
      },
    },

    media: {
      xs: '(max-width: 360px)',
      sm: '(max-width: 496px)',
      md: '(max-width: 768px)',
      lg: '(max-width: 960px)',
      xl: '(max-width: 1280px)',
    },
  })

export type CSS = Stitches.CSS<typeof config>

Stitches.globalCss({
  '@import': [
    "url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Roboto:wght@400;500;700&display=swap')",
  ],
})()
