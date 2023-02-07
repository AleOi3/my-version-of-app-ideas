import 'bootstrap/dist/css/bootstrap.css'
import GlobalStyleComponent from '../styles/global'
import darkStyleComponent from '../styles/themes/darkTheme'
import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkStyleComponent}>
      <Fragment>
        <GlobalStyleComponent></GlobalStyleComponent>
        <Component {...pageProps} />
      </Fragment>
    </ThemeProvider>
  )
}
