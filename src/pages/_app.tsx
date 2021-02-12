import { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../theme'
import '../styles/reset.css'
import '../styles/main.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App