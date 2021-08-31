import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SSRProvider } from '@react-aria/ssr'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Examples accessibility</title>
    </Head>
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
    </>
  )}
  
export default MyApp
