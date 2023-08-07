import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='min-h-screen bg-[#f7ff99] bg-my_bg '>
      <Component {...pageProps} />
    </div>
  )
}
