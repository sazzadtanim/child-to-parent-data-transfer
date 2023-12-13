import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className='bg-[oklch(96%_0.006_360) w-full '>
      <Component {...pageProps} />
    </div>
  )
}
