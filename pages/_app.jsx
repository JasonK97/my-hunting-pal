import { Header, StickyHeader, FooterContainer } from '../components'
import { useRouter } from 'next/router'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Analytics } from '@vercel/analytics/react'

import { createTheme, NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  const path = useRouter().asPath

  const lightTheme = createTheme({
    type: 'light',
    // theme: {
    //   colors: {...}, // optional
    // }
  })
  
  const darkTheme = createTheme({
    type: 'dark',
    theme: {
      colors: {
        background: '#262626',
      },
    }
  })

  return (
    <SessionProvider session={session}>
      <NextThemesProvider
        defaultTheme="dark"
        attribute="class"
        value={{
          // light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
            {/* <Header path={path} /> */}
            <StickyHeader />
            <Component {...pageProps} />
            <Analytics />
            <FooterContainer />
        </NextUIProvider>
      </NextThemesProvider>
    </SessionProvider>
  )
}

export default MyApp
