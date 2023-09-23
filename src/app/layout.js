import './globals.css'
import './styles/stars/stars.css'
import './styles/stars/planets.css'

import Link from 'next/link'

export const metadata = {
  title: 'SpaceY',
  description: 'Everything about Starship Rockets',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>

        <header className='header'>
          <div className='container'>
            <div className='left'>
              <h1>Space</h1>
            </div>
            <div className='right'>
              <ul>
                <li><Link href='/'>Home</Link></li>
                <li><Link href='https://github.com/hacimertgokhan'>Support</Link></li>
              </ul>
            </div>
          </div>
        </header>

        <main>{children}</main>

        <footer className='footer'>
          <div className='container'>
            <div className='left'>
              <ul>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contacts</a></li>
              </ul>
            </div>
            <div className='right'>
              <ul>
                <li><a>Twitter</a></li>
                <li><a>Instagram</a></li>
                <li><a>Github</a></li>
              </ul>
            </div>
          </div>
        </footer>


        <div id='stars_1'></div>
        <div id='stars_2'></div>
        <div id='__planet00'></div>
        <div id='__planet01'></div>
        <div id='__planet02'></div>


        </body>
    </html>
  )
}
