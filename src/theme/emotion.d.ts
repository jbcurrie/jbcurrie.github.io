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
    }
  }
}