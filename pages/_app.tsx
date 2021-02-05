import App from 'next/app'
// import Head from 'next/head'
// import Link from 'next/link'
import '../styles/reset.css'
import '../styles/main.css'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default MyApp