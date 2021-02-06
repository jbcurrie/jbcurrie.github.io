import App from 'next/app'
// import Head from 'next/head'
// import Link from 'next/link'
import '../styles/reset.css'
import '../styles/main.css'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../theme'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
