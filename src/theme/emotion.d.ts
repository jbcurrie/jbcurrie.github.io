import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      black: {
        700: string
      }
      white: {
        100: string
      }
      grey: {
        100: string
      }
      blue: {
        400: string
        500: string
        600: string
        700: string
      }
    }
    transition: {
      all: string
    }
    mq: {
      xsmall: string,
      small: string,
      medium: string,
      large: string
    }
  }
}
