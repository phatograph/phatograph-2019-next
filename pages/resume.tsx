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
            Bangkok, Thailand · born in 1987
            <br />
            phatograph@gmail.com
            <br />
            phatograph.com
          </p>
        </div>

        <h2 className='Table__left'>Experience</h2>

        <div className='Table__right'>
          {(() => {
            const data = [
              {
                title: 'Front-end development team leader',
                company: 'Data Wow Co., Ltd.',
                time: '2019–present',
                description: `Still work with the same stack
                and also response to consultations from the team.`,
              },
              {
                title: 'Senior Front-end · Rails · Node.js developer',
                company: 'Nanameue Inc.',
                time: '2016–2019',
                description: `Work essentially as a lead of front-end development.
                  Specialised in implementing off-the-grid and responsive designs,
                interactive and animationed graphs, charts, and components.
                  Created a standard for Single Page Applications for the team
                and keep it up-to-date.
                  Work with React, Redux, Ruby on Rails, and Node.js.`,
              },
              {
                title: 'Front-end · Rails · Node.js developer',
                company: 'Oozou Limited',
                time: '2012–2014',
                description: `As a fullstack developer,
                designed and developed rich web applications
                using Ruby on Rails and Node.js.
                  Created single page application using AngularJS
                and other cutting-edge technologies.`,
              },
              {
                title: 'Software engineer',
                company: 'Thomson Reuters Software Thailand',
                time: '2010–2012',
                description: `Developed web application using
                ASP.net C# WebForm consuming provided web services.
                  Worked in a huge team based on software development
                with agile methodology.`,
              },
              {
                title: 'Front-end developer',
                company: 'Ecartstudio',
                time: '2009–2010',
                description: `Responsible in front-end development,
                working on HTML/CSS/JS from complex designs.
                  Also worked on backend using ASP.net C# MVC and PHP.`,
              },
            ]

            return (
              <dl className='Data'>
                {data.map((x, i) => (
                  <div key={i} className='Data__item'>
                    <dt className='Data__dt'>
                      <span>{x.company}</span>
                      <small>{x.time}</small>
                    </dt>

                    <small className='Data__small'>{x.title}</small>

                    <dd className='Data__dd'>{x.description}</dd>
                  </div>
                ))}
              </dl>
            )
          })()}
        </div>

        <h2 className='Table__left'>Education</h2>

        <div className='Table__right'>
          {(() => {
            const data = [
              {
                company: 'University of St Andrews · <br />Maynooth University',
                time: '2014 – 2016',
                description: `MSc in Dependable Software Systems <br />
                (Erasmus Mundus two years programme)`,
              },
              {
                company: 'CHULALONGKORN UNIVERSITY',
                time: '2004 – 2008',
                description: `BSc in Computer Science (2<sup>nd</sup> honour)`,
              },
            ]

            return (
              <dl className='Data'>
                {data.map((x, i) => (
                  <div key={i} className='Data__item'>
                    <dt className='Data__dt'>
                      <span dangerouslySetInnerHTML={{__html: x.company}} />
                      <small>{x.time}</small>
                    </dt>

                    <dd
                      className='Data__dd'
                      dangerouslySetInnerHTML={{__html: x.description}}
                    />
                  </div>
                ))}
              </dl>
            )
          })()}
        </div>

        <h2 className='Table__left'>Tech</h2>

        <div className='Table__right'>
          {(() => {
            const data = [
              'React',
              'Redux / Flux',
              'D3',
              'Sass',
              'Node.js',
              'Ruby on Rails',
              'Java',
              'C#',
            ]

            return (
              <ul className='Skills'>
                {data.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            )
          })()}
        </div>
      </div>
    </div>
  )
}

export default Index
