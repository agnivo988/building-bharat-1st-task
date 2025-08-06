import '@/styles/globals.css'
import Head from 'next/head'
 
export default function styles({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.jpg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}