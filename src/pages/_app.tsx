import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>E-commerce em Next</title>
        <link rel='shortcut icon' href='/img/icon-512.png' />
        <link rel='shortcut icon' href='/img/icon-192.png' />
        <meta name='description' content='A simple project' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
