import React from 'react'
import {NextPage} from 'next'
// import className from 'classnames'
import Link from 'next/link'

const Index: NextPage<{}> = () => {
  return (
    <div className='Home'>
      <div className='container'>
        <div className='Home__left'>
          <img
            className='ImageLoader'
            src='http://www.gravatar.com/avatar/669eba01a4293df2f86fb10857efa0af?s=640'
          />
        </div>

        <div className='Home__right'>
          <h1 className='Home__h1'>
            <Link href='/'>
              <a>
                Pat
                <br />
                Wangrungarun
              </a>
            </Link>
          </h1>

          <p className='Home__p'>
            Front-end developer
            <br />
            React · Redux · Rails · Node.js
          </p>

          {(() => {
            const data = [
              {title: 'Résumé', to: '/resume'},
              {title: 'Blog', href: 'http://blog.phatograph.com'},
              {title: 'GitHub', href: 'https://github.com/phatograph'},
              {
                title: 'LinkedIn',
                href: 'https://www.linkedin.com/in/phatograph',
              },
            ]

            return (
              <ul className='Home__ul'>
                {data.map((x, i) => (
                  <li key={i}>
                    {x.to ? (
                      <Link href={x.to}>
                        <a className='Home__ul__a'>{x.title}</a>
                      </Link>
                    ) : (
                      <a
                        className='Home__ul__a'
                        href={x.href}
                        target='_blank'
                        rel='nofollow'
                      >
                        {x.title}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            )
          })()}

          <p className='Home__footer'>2016–2019 © phatograph.com</p>
        </div>
      </div>
    </div>
  )
}

export default Index
