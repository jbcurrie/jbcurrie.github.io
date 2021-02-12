import { Theme } from '@emotion/react'

const theme: Theme = {
  color: {
    black: {
      700: '#000000',
    },
    white: {
      100: '#FCFCFC',
    },
    blue: {
      400: '1F4AE2',
      500: '#000C3A',
      600: '#0C1740',
      700: '#060B20',
    },
  },
  transition: {
    all: 'all .3s',
  },
  mq: {
    xsmall: '@media (max-width: 576px)',
    small: '@media (max-width: 768px)',
    medium: '@media (max-width: 992px)',
    large: '@media (min-width: 1200px)'
  }
}

export default theme
