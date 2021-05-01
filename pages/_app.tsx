import React from 'react'
import className from 'classnames'
import Head from 'next/head'
import kebabCase from 'lodash/kebabCase'
import {useRouter} from 'next/router'
import smoothscroll from 'smoothscroll-polyfill'
import Link from 'next/link'
import {AppProps} from 'next/app'

// import {t} from '@lib/helpers'

// import Header from '@components/Header'

import '../css/app.scss'

const MyApp = ({Component, pageProps}: AppProps) => {
  React.useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  const title = 'Pat Wangrungarun | phatograph-2019'
  const description = 'phatograph-2019 recreated in Next.js'

  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
          // content='width=1300, viewport-fit=cover'
        />

        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content='/images/og.png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='630' />

        <link rel='icon' type='image/png' href='/images/pat.png' />
        <link
          href='https://fonts.googleapis.com/css?family=Roboto+Condensed|Lato:300,700|Oswald|Fjalla+One|Raleway:200'
          rel='stylesheet'
          type='text/css'
        />
      </Head>

      <div className='Main'>
        <Component
          {...{
            ...pageProps,
          }}
        />
      </div>
    </React.Fragment>
  )
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp
